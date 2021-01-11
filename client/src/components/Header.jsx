import React, { Component } from 'react';
import logoLarge from '../img/GSlogoLarge.png';
import logoSmall from '../img/GSlogoSmall.png';
import cartIcon from '../assets/cart-icon.svg';

class Header extends Component {
    render() {
        return (
            <header class="header mb-5">
                <div id="top">
                    
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
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a href="/" class="navbar-brand home">
                <img src={logoLarge} alt="Golden Shoe logo" class="d-none d-md-inline-block" />
                <img src={logoSmall} alt="Golden Shoe logo" class="d-inline-block d-md-none" />
                <span class="sr-only">Golden Shoe - go to homepage</span>
            </a>
            <div class="navbar-buttons">
                <button type="button" data-toggle="collapse" data-target="#navigation" class="btn btn-outline-secondary navbar-toggler">
                    <span class="sr-only">Toggle navigation</span><i class="fa fa-align-justify"></i>
                </button>
                <button className="btn btn-outline-secondary navbar-toggler" onClick={this.props.handleCartOpen}>
                    <i class="fa fa-shopping-cart"></i>
                </button>
            </div>
            <div id="navigation" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a href="/" class="nav-link active">Home</a></li>
                    <li class="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Products<b class="caret"></b></a>
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
                    <li class="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">About<b class="caret"></b></a>
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
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown menu-large"><a href="/" data-toggle="dropdown" data-hover="dropdown" data-delay="200" class="dropdown-toggle nav-link">Contact<b class="caret"></b></a>
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
                <div className="right-navigation">
                    <input className='header-icons' type="image"
                        src={cartIcon}
                        onClick={this.props.handleCartOpen}
                        alt="Cart icon"
                    />
                </div>
            </div>
        </div>
    </nav>         
            </header>   
        )
    }
};


export default Header;