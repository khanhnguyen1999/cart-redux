import React,{Component} from 'react';
import Product from './Product'
import {connect} from 'react-redux'

class Products extends Component {
    render() {
        var {product}  = this.props;
        return (
        <section className="section container mt-3">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {
                    this.showProducts(product)
                }
            </div>
        </section>
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

export default connect(mapStateToProps)(Products);
