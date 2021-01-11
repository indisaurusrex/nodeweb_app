import React, { Component } from 'react';
// import { Footer, Product, Products } from "./components";
import { BrowserRouter, Route } from 'react-router-dom';

import ProductGrid from './ProductGrid';
import GridSearch from './GridSearch';
import Landing from './Landing';
import Offerings from './Offerings';
// import Header from './components/Header';
import Headert from './Header2';

import Cart from './Cart';
import Single from './Single';

class App extends Component {

    state = {
        response: {}
    };

    constructor() {
        super();

        this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            products: [],
            shop: {}
        };

        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }

    componentWillMount() {
        this.props.client.checkout.create().then((res) => {
            this.setState({
                checkout: res,
            });
        });

        this.props.client.product.fetchAll().then((res) => {
            this.setState({
                products: res,
            });
        });

        this.props.client.shop.fetchInfo().then((res) => {
            this.setState({
                shop: res,
            });
        });
    }

    addVariantToCart(variantId, quantity) {
        this.setState({
            isCartOpen: true,
        });

        const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
        const checkoutId = this.state.checkout.id

        return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id
        const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

        return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id

        return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
            this.setState({
                checkout: res,
            });
        });
    }

    handleCartClose() {
        this.setState({
            isCartOpen: false,
        });
    }

    render() {

        const renderProductGrid = (props) => {
            return (
                <ProductGrid
                    products={this.state.products}
                    searchResults={this.state.searchResults}
                    updateSearch={this.updateSearch}
                    updateSearchResults={this.updateSearchResults}
                    search={this.state.search}
                    {...props}
                />
            )
        }

        const renderHeader = (props) => {
            return (
                <Headert
                    handleCartOpen={this.handleCartOpen}
                    products={this.state.products}
                    updateSearch={this.updateSearch}
                    updateSearchResults={this.updateSearchResults}
                    search={this.state.search}
                    {...props}
                />
            )
        }

        const renderSingle = (props) => {
            return (
                <Single
                    client={this.props.client}
                    isCartOpen={this.state.isCartOpen}
                    products={this.state.products}
                    addVariantToCart={this.addVariantToCart}
                    {...props}
                />
            )
        }



        return (
            <div className="App">
                <BrowserRouter>
                    <Route path="/" render={renderHeader} />
                    <Route exact path="/" component={Landing} />
                    <Route path="/products" render={renderProductGrid} />
                    <Route exact path="/offerings" component={Offerings} />
                    <Route exact path="/view/:productId" render={renderSingle} />


                    {/* Header was here */}

                    {/* Single Product */}

                    {/* <SingleProduct /> */}

                    {/* single product ends */}

                    <Cart
                        checkout={this.state.checkout}
                        isCartOpen={this.state.isCartOpen}
                        handleCartClose={this.handleCartClose}
                        updateQuantityInCart={this.updateQuantityInCart}
                        removeLineItemInCart={this.removeLineItemInCart}
                    />
                    {/* <Footer /> */}



                </BrowserRouter>
            </div>

        );
    }
}

export default App;