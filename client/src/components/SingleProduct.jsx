import React, { Component } from 'react';
import VariantSelector from './VariantSelector';

class SingleProduct extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this.props.product.options.forEach((selector) => {
            defaultOptionValues[selector.name] = selector.values[0].value;
        });
        this.state = { selectedOptions: defaultOptionValues };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;
        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    handleQuantityChange(event) {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    render() {
        const { title, images, options } = this.props.product

        let variant = this.state.selectedVariant || this.props.product.variants[0]
        let variantQuantity = this.state.selectedVariantQuantity || 1

        const addToCartButton = <button className="body-text" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)} >Add To Cart</button>

        const quantityField = <label>
            <input className="body-text" min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>

        let variantSelectors = options.map((option) => {
            return (
                <VariantSelector
                    handleOptionChange={this.handleOptionChange}
                    handleQuantityChange={this.handleQuantityChange}
                    key={option.id.toString()}
                    option={option}
                />
            )
        })

        return (
            <div className="SingleProduct">
                <div id="all">
                    <div id="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                                            <li class="breadcrumb-item"><a href="/">Looks and Trends</a></li>
                                            <li class="breadcrumb-item"><a href="/">Winter</a></li>
                                            <li aria-current="page" class="breadcrumb-item active">LED High Tops</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div class="col-lg-3 order-2 order-lg-1">
                                    <div class="card sidebar-menu mb-4">
                                        <div class="card-header"><h3 class="h4 card-title">Categories</h3></div>
                                        <div class="card-body">
                                            <ul class="nav nav-pills flex-column category-menu">
                                                <li><a href="/" class="nav-link">Men </a>
                                                    <ul class="list-unstyled">
                                                        <li><a href="/" class="nav-link">Sports</a></li>
                                                        <li><a href="/" class="nav-link">Evening Wear</a></li>
                                                        <li><a href="/" class="nav-link">Casual</a></li>
                                                        <li><a href="/" class="nav-link">Slippers</a></li>
                                                        <li><a href="/" class="nav-link">Sandals</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/" class="nav-link active">Women </a>
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
                                        <div class="card-header"><h3 class="h4 card-title">Brands</h3></div>
                                        <div class="card-body">
                                            <form>
                                                <div class="form-group">
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Nike </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Adidas </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Reebok </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Supra </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="card sidebar-menu mb-4">
                                        <div class="card-header"><h3 class="h4 card-title">Colours </h3></div>
                                        <div class="card-body">
                                            <form>
                                                <div class="form-group">
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> White </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Blue </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" />  Green </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" />  Yellow </label>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label><input type="checkbox" /> Red </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 order-1 order-lg-2">
                                    <div id="productMain" class="row">
                                        <div class="col-md-6">
                                            <img src={images[0].src}  alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="box">
                                                <h1 class="text-center">{title}</h1>
                                                <p>{this.props.product.description || 'A fine fine fiiine product'}</p>
                                                <p class="goToDescription"><a href="#details" class="scroll-to">Scroll to further product details, material &amp; care and sizing</a></p>
                                                <p class="price">£{this.props.product.variants[0].price || '£58.99'}</p>
                                                <p class="text-center buttons">
                                                    <span className="single-variant-selectors body-text">
                                                        <span>
                                                            {variantSelectors}
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="add-to-cart-wrapper" class="text-center">
                                                    <span className="single-quantity body-text">
                                                        {quantityField}
                                                    </span>
                                                    {addToCartButton}
                                                </div>
                                                <hr />
                                                <div class="text-center">
                                                    <h3>Delivery</h3>
                                                    <p>Your item will be delivered within 4 business days of purchase.</p>
                                                    <h3>Returns</h3>
                                                    <p>If they're not right, complete the form in the delivery box to return your shoes.</p>
                                                    <h3>Size Guide</h3>
                                                    <p>Have a look at our <a href="/">size guide</a> to see if these will be a good fit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="details" class="box">
                                        <h4>Product details</h4>
                                        <p>Lots of space for more product details when they're loaded</p>
                                        <h4>Care Instructions</h4>
                                        <ul>
                                            <li>Vegan Leather</li>
                                            <li>Wipe clean with a damp cloth, do not submerge</li>
                                        </ul>
                                        <h4>Size &amp; Fit</h4>
                                        <ul>
                                            <li>Regular fit</li>
                                            <li>The model (height 5'8" and chest 33") is wearing a size 8</li>
                                        </ul>
                                        <blockquote>
                                            <p><em>Define style this season with this awesome range of trendy shoes, crafted with intricate LED detailing. Create a chic statement look ready to party or jog in the morning hours by teaming these flashy shoes with skinny jeans and a cut off tee.</em></p>
                                        </blockquote>
                                        <hr />
                                        <div class="social">
                                            <h4>Show it to your friends</h4>
                                            <p>
                                                <a href="/" class="external facebook">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                                <a href="/" class="external gplus">
                                                    <i class="fa fa-google-plus"></i>
                                                </a>
                                                <a href="/" class="external twitter">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                                <a href="/" class="email">
                                                    <i class="fa fa-envelope"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SingleProduct;