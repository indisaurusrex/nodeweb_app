import React, { Component } from 'react';
import { Footer, Product, Products } from "./components";
import { BrowserRouter, Route } from 'react-router-dom';

import ProductGrid from './components/ProductGrid';
import GridSearch from './components/GridSearch';

import Cart from './components/Cart';
import Single from './components/Single';

class App extends Component {

    state = {
        response: {}
    };

    constructor() {
        super();

        this.state = {
            isCartOpena: false,
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
                    <Route exact path="/single" render={renderSingle} />
                <header class="header mb-5">
                    <div id="top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 offer mb-3 mb-lg-0"></div>
                                <div class="col-lg-6 text-center text-lg-right">
                                    <ul class="menu list-inline mb-0">
                                        <li class="list-inline-item"><a href="/" data-toggle="modal" data-target="#login-modal">Login</a></li>
                                        <li class="list-inline-item"><a href="/">Register</a></li>
                                        <li class="list-inline-item"><a href="/">Contact</a></li>
                                        <li class="list-inline-item"><a href="/">Recently viewed</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="login-modal" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" class="modal fade">
                            <div class="modal-dialog modal-sm">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Customer login</h5>
                                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="/" method="post">
                                            <div class="form-group">
                                                <input id="email-modal" type="text" value="email" class="form-control" />
                                            </div>
                                            <div class="form-group">
                                                <input id="password-modal" type="password" value="password" class="form-control" />
                                            </div>
                                            <p class="text-center">
                                                <button class="btn btn-primary"><i class="fa fa-sign-in"></i> Log in</button>
                                            </p>
                                        </form>
                                        <p class="text-center text-muted">Not registered yet?</p>
                                        <p class="text-center text-muted"><a href="/"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of top div */}
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <a href="/" class="navbar-brand home">
                                <img src="img/GSlogoLarge.png" alt="Golden Shoe logo" class="d-none d-md-inline-block" />
                                <img src="img/GSlogoSmall.png" alt="Golden Shoe logo" class="d-inline-block d-md-none" />
                                <span class="sr-only">Golden Shoe - go to homepage</span>
                            </a>
                            <div class="navbar-buttons">
                                <button type="button" data-toggle="collapse" data-target="#navigation" class="btn btn-outline-secondary navbar-toggler"><span class="sr-only">Toggle navigation</span><i class="fa fa-align-justify"></i></button>
                                <button type="button" data-toggle="collapse" data-target="#search" class="btn btn-outline-secondary navbar-toggler"><span class="sr-only">Toggle search</span><i class="fa fa-search"></i></button><button className="btn btn-outline-secondary navbar-toggler" onClick={() => this.setState({ isCartOpen: true })}><i class="fa fa-shopping-cart"></i></button>
                            </div>
                            <div id="navigation" class="collapse navbar-collapse">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
                                    <li class="nav-item dropdown menu-large"><a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Products<b class="caret"></b></a>
                                        <ul class="dropdown-menu megamenu">
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Women</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Sports</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Evening Wear</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Casual</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Slippers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Highheels</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Pumps</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Men</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Sports</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Evening Wear</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Casual</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Slippers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Featured</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Winter</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Cosy</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Fancy</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown menu-large"><a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">About<b class="caret"></b></a>
                                        <ul class="dropdown-menu megamenu">
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>FAQs</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Delivery</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Returns</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Size Guide</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Shoes</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Trainers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Hiking shoes</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Casual</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Accessories</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Trainers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Hiking shoes</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Casual</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Hiking shoes</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Casual</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Featured</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Trainers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Hiking shoes</a></li>
                                                        </ul>
                                                        <h5>Looks and trends</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Trainers</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Sandals</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Hiking shoes</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown menu-large"><a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Contact<b class="caret"></b></a>
                                        <ul class="dropdown-menu megamenu">
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-3">
                                                        <h5>Get in touch</h5>
                                                        <ul class="list-unstyled mb-3">
                                                            <li class="nav-item"><a href="/" class="nav-link">Call us on 0800 123 1234</a></li>
                                                            <li class="nav-item"><a href="/" class="nav-link">Lines are open Mon-Fri 9am-5pm</a></li>
                
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="navbar-buttons d-flex justify-content-end">
                                    <div id="search-not-mobile" class="navbar-collapse collapse"></div>
                                    <a data-toggle="collapse" href="#search" class="btn navbar-btn btn-primary d-none d-lg-inline-block">
                                        <span class="sr-only">Toggle search</span>
                                        <i class="fa fa-search"></i>
                                    </a>
                                    <div id="basket-overview" class="navbar-collapse collapse d-none d-lg-block">
                                        <a class="btn btn-primary navbar-btn">
                                            {!this.state.isCartOpen &&
                                                <div className="App__view-cart-wrapper">
                                                <button className="App__view-cart" onClick={() => this.setState({ isCartOpen: true })}><span class="text-center">Cart</span></button>
                                                </div>
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* end of nav but start of search */}
                    <div id="search" class="collapse">
                        <div class="container">
                            <form role="search" class="ml-auto">
                                <div class="input-group">
                                    <input type="text" value="Search" class="form-control" />
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </header>

                {/* <Header /> */}

                {/* Single Product */}
                
                {/* <SingleProduct /> */}
                <div className="SingleProduct">
                    <div id="all">
                        <div id="content">
                            <div class="container">
                                <div class="row">
                                    {/* breadcrumb */}
                                    <div class="col-lg-12">
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                <li class="breadcrumb-item"><a href="#">Looks and Trends</a></li>
                                                <li class="breadcrumb-item"><a href="#">Winter</a></li>
                                                <li aria-current="page" class="breadcrumb-item active">LED High Tops</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    {/* end of breadcrumb start of side menu */}
                                    <div class="col-lg-3 order-2 order-lg-1">
                                        <div class="card sidebar-menu mb-4">
                                            <div class="card-header">
                                                <h3 class="h4 card-title">Categories</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="nav nav-pills flex-column category-menu">
                                                    <li><a href="/" class="nav-link">Men <span class="badge badge-secondary">42</span></a>
                                                        <ul class="list-unstyled">
                                                            <li><a href="/" class="nav-link">Sports</a></li>
                                                            <li><a href="/" class="nav-link">Evening Wear</a></li>
                                                            <li><a href="/" class="nav-link">Casual</a></li>
                                                            <li><a href="/" class="nav-link">Slippers</a></li>
                                                            <li><a href="/" class="nav-link">Sandals</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/" class="nav-link active">Women  <span class="badge badge-light">123</span></a>
                                                        <ul class="list-unstyled">
                                                            <li><a href="/" class="nav-link">Sports</a></li>
                                                            <li><a href="/" class="nav-link">Evening Wear</a></li>
                                                            <li><a href="/" class="nav-link">Casual</a></li>
                                                            <li><a href="/" class="nav-link">Slippers</a></li>
                                                            <li><a href="/" class="nav-link">Sandals</a></li>
                                                            <li><a href="/" class="nav-link">High Heels</a></li>
                                                            <li><a href="/" class="nav-link">Pumps</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card sidebar-menu mb-4">
                                            <div class="card-header">
                                                <h3 class="h4 card-title">Brands</h3>
                                            </div>
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Armani  (10)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Versace  (12)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Carlo Bruni  (15)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Jack Honey  (14)
                                                    </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="card sidebar-menu mb-4">
                                            <div class="card-header">
                                                <h3 class="h4 card-title">Colours </h3>
                                            </div>
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-group">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> White (14)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Blue (10)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" />  Green (20)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" />  Yellow (13)
                                                    </label>
                                                        </div>
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> Red (10)
                                                    </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of side menu */}
                                    {/* Start of product info */}
                                    <div class="col-lg-9 order-1 order-lg-2">
                                        <div id="productMain" class="row">
                                            {/* image of product */}
                                            <div class="col-md-6">
                                                <div>
                                                    <div class="item"> <img src="" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of image */}
                                            <div class="col-md-6">
                                                {/* details of the product */}
                                                <div class="box">
                                                    <h1 class="text-center">White Blouse Armani</h1>
                                                    <p class="goToDescription"><a href="#details" class="scroll-to">Scroll to product details, material &amp; care and sizing</a></p>
                                                    <p class="text-center">Size:
                                                <a href="#">  3  </a>|
                                                <a href="#">  4  </a>|
                                                <a href="#">  5  </a>|
                                                <a href="#">  6  </a>|
                                                <a href="#">  7  </a>|
                                                <a href="#">  8  </a></p>
                                                    <p class="price">$124.00</p>
                                                    <p class="text-center buttons"><a href="/" class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Add to cart</a><a href="/" class="btn btn-outline-primary"><i class="fa fa-heart"></i> Add to wishlist</a></p>
                                                </div>
                                                {/* end of product details */}
                                                {/* delivery and returns bit */}
                                                <div class="box">
                                                    <h3 class="text-center">Delivery</h3>
                                                    <p class="text-center">Your item will be delivered within 4 business days of purchase.</p>
                                                    <h3 class="text-center">Returns</h3>
                                                    <p class="text-center">If they're not right, complete the form in the delivery box to return your shoes.</p>
                                                    <h3 class="text-center">Size Guide</h3>
                                                    <p class="text-center">Have a look at our <a href="#">size guide</a> to see if these will be a good fit.</p>
                                                </div>
                                                {/* end of delivery and returns */}
                                            </div>
                                        </div>
                                        <div id="details" class="box">
                                            <p></p>
                                            <h4>Product details</h4>
                                            <p>White lace top, woven, has a round neck, short sleeves, has knitted lining attached</p>
                                            <h4>Material &amp; care</h4>
                                            <ul>
                                                <li>Polyester</li>
                                                <li>Machine wash</li>
                                            </ul>
                                            <h4>Size &amp; Fit</h4>
                                            <ul>
                                                <li>Regular fit</li>
                                                <li>The model (height 5'8" and chest 33") is wearing a size S</li>
                                            </ul>
                                            <blockquote>
                                                <p><em>Define style this season with Armani's new range of trendy tops, crafted with intricate details. Create a chic statement look by teaming this lace number with skinny jeans and pumps.</em></p>
                                            </blockquote>
                                            <hr />
                                            <div class="social">
                                                <h4>Show it to your friends</h4>
                                                <p>
                                                    <a href="#" class="external facebook">
                                                        <i class="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#" class="external gplus">
                                                        <i class="fa fa-google-plus"></i>
                                                    </a>
                                                    <a href="#" class="external twitter">
                                                        <i class="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#" class="email">
                                                        <i class="fa fa-envelope"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="row">
                                    {/* recommendations */}
                                    <div class="row same-height-row">
                                        <div class="col-md-3 col-sm-6">
                                            <div class="product same-height">
                                                <div class="flip-container">
                                                    <div class="flipper">
                                                        <div class="front"><a href="/"><img src="img/product1.jpg" alt="" class="img-fluid" /></a></div>
                                                        <div class="back"><a href="/"><img src="img/product1_2.jpg" alt="" class="img-fluid" /></a></div>
                                                    </div>
                                                </div><a href="/" class="invisible"><img src="img/product1.jpg" alt="" class="img-fluid" /></a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="product same-height">
                                                <div class="flip-container">
                                                    <div class="flipper">
                                                        <div class="front"><a href="/"><img src="img/product2.jpg" alt="" class="img-fluid" /></a></div>
                                                        <div class="back"><a href="/"><img src="img/product2_2.jpg" alt="" class="img-fluid" /></a></div>
                                                    </div>
                                                </div><a href="/" class="invisible"><img src="img/product2.jpg" alt="" class="img-fluid" /></a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="product same-height">
                                                <div class="flip-container">
                                                    <div class="flipper">
                                                        <div class="front"><a href="/"><img src="img/product1.jpg" alt="" class="img-fluid" /></a></div>
                                                        <div class="back"><a href="/"><img src="img/product1_2.jpg" alt="" class="img-fluid" /></a></div>
                                                    </div>
                                                </div><a href="/" class="invisible"><img src="img/product1.jpg" alt="" class="img-fluid" /></a>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="product same-height">
                                                <div class="flip-container">
                                                    <div class="flipper">
                                                        <div class="front"><a href="/"><img src="img/product1.jpg" alt="" class="img-fluid" /></a></div>
                                                        <div class="back"><a href="/"><img src="img/product1_2.jpg" alt="" class="img-fluid" /></a></div>
                                                    </div>
                                                </div><a href="/" class="invisible"><img src="img/product1.jpg" alt="" class="img-fluid" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of recommendations */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* single product ends */}
                
                <Cart
                    checkout={this.state.checkout}
                    isCartOpen={this.state.isCartOpen}
                    handleCartClose={this.handleCartClose}
                    updateQuantityInCart={this.updateQuantityInCart}
                    removeLineItemInCart={this.removeLineItemInCart}
                />
                <Footer />

                
                </BrowserRouter>
            </div>

        );
    }
}

export default App;