import React,{Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductContainer from './containers/ProductContainer';
import Message from './components/Message'
import CartContainer from './containers/CartContainer';
import MessContainer from './containers/MessContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer/>
                        <MessContainer/>
                        <CartContainer/>
                    </div>
                </main>
                <Footer/>
            </div>
      );
    }
}

export default App;
