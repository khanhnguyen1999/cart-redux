import React,{Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import * as Message from '../constants/Message'
import {actDeleteProductInCart, actChangeMess,actUpdateQuantity} from '../actions/index'
import message from '../reducers/message';

class CartContainer extends Component {
    render() {
        var {cart}=this.props;
        console.log(cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotal(cart)}
            </Cart>
      );
    }
    showCartItem = (cart)=>{
        var result = Message.MSG_CART_EMPTY;
            if(cart.length>0){
                result = cart.map((value,id)=>{
                    return <CartItem
                            onUpdateQuantity={this.props.onUpdateQuantity}
                            onChangeMessage={this.props.onChangeMessage}
                            onDeleteProductToCart={this.props.onDeleteProductToCart}
                            key={id}
                            cart={value}/>
                })
            }
        return result;
    }
    showTotal = (cart)=>{
        var result = null;
        if(cart.length>0){
            result = <CartResult cart={cart}/>
        }
        return result
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired
            }),
            quantity:PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state =>{
    return {
        cart:state.cart
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        onDeleteProductToCart : (product)=>{
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage : (message)=>{
            dispatch(actChangeMess(message))
        },
        onUpdateQuantity: (product,quantity)=>{
            dispatch(actUpdateQuantity(product,quantity))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
