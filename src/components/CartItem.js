import React,{Component} from 'react';
import * as Message from '../constants/Message'
class CartItem extends Component {
    render() {
        var {cart}=this.props;
        var {quantity} = cart;
        return (
            <tr>
            <th scope="row">
                <img src={cart.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{cart.product.name}</strong>
                </h5>
            </td>
            <td>{cart.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity -1)} className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity +1)} className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{cart.product.price * cart.quantity }$</td>
            <td>
                <button 
                onClick={()=>this.onDelete(cart.product)}
                type="button"
                className="btn btn-sm btn-primary waves-effect waves-light"
                data-toggle="tooltip"
                data-placement="top"
                title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
      );
    }
    onUpdateQuantity(product,quantity){
        if(quantity>0){
            this.props.onUpdateQuantity(product,quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }
    }
    onDelete(product){
        console.log(product)
        this.props.onDeleteProductToCart(product)
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_SUCCESS)
    }
}

export default CartItem;
