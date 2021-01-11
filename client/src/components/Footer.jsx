import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="mb-3">Pages</h4>
                            <ul class="list-unstyled">
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Terms and conditions</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul>
                            <hr></hr>
                            <h4 class="mb-3">User section</h4>
                            <ul class="list-unstyled">
                                <li><a href="/" data-toggle="modal" data-target="#login-modal">Login</a></li>
                                <li><a href="/">Register</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="mb-3">Top categories</h4>
                            <h5>Men</h5>
                            <ul class="list-unstyled">
                                <li><a href="/">All</a></li>
                                <li><a href="/">Sports</a></li>
                                <li><a href="/">Evening Wear</a></li>
                                <li><a href="/">Casual</a></li>
                                <li><a href="/">Slippers</a></li>
                                <li><a href="/">Sandals</a></li>
                            </ul>
                            <h5>Women</h5>
                            <ul class="list-unstyled">
                                <li><a href="/">All</a></li>
                                <li><a href="/">Sports</a></li>
                                <li><a href="/">Evening Wear</a></li>
                                <li><a href="/">Casual</a></li>
                                <li><a href="/">Slippers</a></li>
                                <li><a href="/">Sandals</a></li>
                                <li><a href="/">High Heels</a></li>
                                <li><a href="/">Pumps</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="mb-3">Where to find us</h4>
                            <p><strong>Golden Shoe</strong><br />7 Oxford Street<br />London<br />W1D 1BS<br />England<br /><strong>Great Britain</strong></p>
                            <a href="/">Contact</a>
                            <hr class="d-block d-md-none" />
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <h4 class="mb-3">Get the news</h4>
                            <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <form>
                                <div class="input-group">

                                    <input type="text" class="form-control" value="Enter your email" />
                                    <span class="input-group-append">
                                        <button type="button" class="btn btn-outline-secondary">Subscribe!</button>
                                    </span>

                                </div>
                            </form>
                            <hr />
                            <h4 class="mb-3">Stay in touch</h4>
                            <p class="social">
                                <a href="/" class="facebook external">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href="/" class="twitter external">
                                    <i class="fa fa-twitter"></i>
                                </a><a href="/" class="instagram external">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a href="/" class="gplus external">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                                <a href="/" class="email external">
                                    <i class="fa fa-envelope"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;