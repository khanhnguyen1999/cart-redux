import React,{Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import Message from '../components/Message'

class MessContainer extends Component {
    render() {
        return (
            <Message message={this.props.message}/>
      );
    }
}

MessContainer.propTypes = {
    message : PropTypes.string.isRequired
}
const mapStateToProps = state =>{
    return {
        message:state.message
    }
}

export default connect(mapStateToProps)(MessContainer);
