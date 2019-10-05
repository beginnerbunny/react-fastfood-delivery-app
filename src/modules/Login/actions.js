import { SIGN_UP, LOGIN, LOGOUT } from "./reducer";
import { auth, db} from "../../shared/firestore";

export function signUp({ email, password, phone, address, name }) {
  let request = auth
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      let uid = data && data.user && data.user.uid ? data.user.uid : null;
      if (uid) {
        var batch = db.batch();
        batch.set(db.collection("userDetails").doc(uid), {
          name,
          email,
          address,
          phone
        });
        return Promise.all([
          auth.currentUser.updateProfile({ displayName: name }),
          // auth.currentUser.updatePhoneNumber({ phoneNumber: phone }),
          batch.commit()
        ]);
      } else {
        return Promise.resolve({ error: true, val: data });
      }
    })
    .then(data => {
      console.log("weee");

      return Promise.resolve(data);
    })
    .catch(error => {
      console.log("err", error);
      return Promise.resolve({ error: true, val: error });
    });
  return {
    type: SIGN_UP,
    payload: request
  };
}

export function login({ email, password }) {
  console.log("In login");
  let request = auth
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      console.log("weee in login");
      return Promise.resolve(data);
    })
    .catch(err => Promise.resolve({ error: true, val: err }));
  return {
    type: LOGIN,
    payload: request
  };
}

function _logout() {
  let request = auth.signOut();

  return {
    type: LOGOUT,
    payload: request
  };
}
