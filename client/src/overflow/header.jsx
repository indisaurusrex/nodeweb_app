// from app.js
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







// from the header.jsx file
import React from 'react';

function Header() {
    return (
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
    );
}

export default Header;