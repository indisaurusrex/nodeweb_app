import React, { Component } from 'react';
import Products from './Products';

class ProductCatalogue extends Component {

    state = {
        response: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            shop: {}
        };
    }

    componentWillMount() {

        this.props.client.product.fetchAll().then((res) => {
            this.setState({
                products: res,
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

    render() {
        return (
            <div className="products">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-12">
                            <h1 class="font-weight-light">All Products</h1>
                            <p>
                                <Products
                                    products={this.state.products}
                                    client={this.props.client}
                                    addVariantToCart={this.addVariantToCart}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
       
    }
}

export default ProductCatalogue;