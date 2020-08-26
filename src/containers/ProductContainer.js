import React,{Component} from 'react';
import {connect} from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
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

const mapStateToProps = state =>{
    return {
        product:state.product
    }
}

export default connect(mapStateToProps)(ProductContainer);
