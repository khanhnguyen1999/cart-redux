import React,{Component} from 'react';
import {connect} from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types'

class ProductContainer extends Component {
    render() {
        var {product}  = this.props;
        return (
            <Products>
                {
                    this.showProducts(product)
                }
            </Products>
      );
    }
    showProducts(product){
        var result = null;
            if(product.length>0){
                result = product.map((value,id)=>{
                    return <Product key={id} product={value}/>
                })
            }
        return result;
    }
}

ProductContainer.propTypes = {
    product : PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state =>{
    return {
        product:state.product
    }
}

export default connect(mapStateToProps)(ProductContainer);
