import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

const initialstate = {
    checkoutAlert: false
};
class Cart extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = initialstate;
    }

    removeItemFromCart = (idx) => {
        let arr = [...this.props.selectedItems];
        arr.splice(idx, 1);
        this.props.removeItemFromCart(arr);
    }

    render() {
        let total = 0.0;
        let summaryJsx = this.props.selectedItems && this.props.selectedItems.map((item, index) => {
            total += item.discountPrice;
            return (
                <tr key={index}>
                    <td>
                        <span className="btn-remove" onClick={e => this.removeItemFromCart(index)} >{'x'}</span>
                    </td>
                    <td>
                        {item.name}
                    </td>
                    <td>{' X '}</td>
                    <td>
                        {'₹' + item.discountPrice}
                    </td>
                    <td>{' = '}</td>
                    <td>
                        <b>
                            {'₹' + item.discountPrice}
                        </b>
                    </td>
                </tr>
            );
        });
        return (
            <div>
                {this.props.selectedItems && this.props.selectedItems.length > 0 && (
                    <div className="cart-container">
                        <div className="card-title">
                            {'ORDER SUMMARY'}
                        </div>
                        <br />
                        <table className="table table-striped">
                            <tbody>
                               {summaryJsx}
                            </tbody>
                        </table>
                        <br />
                        <div className="cart-total">
                            {'Total: ₹' + total}
                        </div>
                        <div className="choose-payment">
                            <h3>Choose Payment Method</h3>
                            <div>
                                <input type="radio" name="payment" value="cash"></input>
                            {'Cash'}
                            </div>
                            <div>
                            <input type="radio" name="payment" value="card"></input>
                            {'Card'}
                            </div>
                            <div>
                            <input type="radio" name="payment" value="paytm"></input>
                            {'Paytm'}
                            </div>
                        </div>
                        <button onClick={() => this.props.history.push('/payment')}>Pay</button>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedItems: state.CartReducer.selection
    };
}

//  Set the actions which will prompt the reducers to check for matching types
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeItemFromCart: actions.removeItemToSelection,
        checkoutCurrentOrder: actions.checkoutCurrentOrder
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);