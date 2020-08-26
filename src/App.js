import React,{Component} from 'react';
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductContainer from './containers/ProductContainer';
import Message from './components/Message'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer/>
                        <Message/>
                        <Cart/>
                    </div>
                </main>
                <Footer/>
            </div>
      );
    }
}

export default App;
