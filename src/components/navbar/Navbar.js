import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';
import '../../helpers/Variables.scss';
import menu_img from '../../imgs/header/header1.JPG';

let navBackgournd = 'rgba(38, 38, 38, .3)';

class Navbar extends Component {

    state = {
        background: navBackgournd
    }

    handleScroll = (e) => {
        let upperBarHeight = document.getElementById('upper-bar-h').clientHeight;
        if(window.scrollY > upperBarHeight) {
            this.setState({
                background: '#262626'
            });
        } else {
            this.setState({
                background: navBackgournd
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav-content uk-position-top" style={window.location.pathname === '/' ? {background: this.state.background} : {background: '#262626'}}>
                    {/* start upper bar of navbar */}
                    <div id="upper-bar-h" className="upper-bar uk-light">
                        <div className="uk-container">
                            <div className="uk-child-width-1-3" data-uk-grid>
                                <div className="menu-and-search uk-text-center uk-text-left@s">
                                    <div className="menu uk-display-inline-block">
                                        <button title="Offers Menu" className="menu-btn" type="button" data-uk-toggle="target: #menu-modal"><i className="fa fa-bars"></i></button>
                                        <div id="menu-modal" className="uk-modal-full uk-animation-slide-top" data-uk-modal>
                                            <div className="uk-modal-dialog uk-modal-body" data-uk-height-viewport>
                                                <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                                                <div className="uk-grid-collapse uk-child-width-1-3@m" data-uk-grid>
                                                    <div className="clothes-types">
                                                        <div className="uk-child-width-1-2@m" data-uk-grid>
                                                            <div>
                                                                <h5 className="uk-text-uppercase">T-shirts &amp; Sports</h5>
                                                                <ul className="uk-list uk-list-large">
                                                                    <li><Link to="/">Sports</Link></li>
                                                                    <li><Link to="/">Shirts</Link></li>
                                                                    <li><Link to="/">T-shirts</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <h5 className="uk-text-uppercase">Outerwear</h5>
                                                                <ul className="uk-list uk-list-large">
                                                                    <li><Link to="/">Coats</Link></li>
                                                                    <li><Link to="/">Pullovers</Link></li>
                                                                    <li><Link to="/">Jackets</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <h5 className="uk-text-uppercase">Warm clothes</h5>
                                                                <ul className="uk-list uk-list-large">
                                                                    <li><Link to="/">Sweaters</Link></li>
                                                                    <li><Link to="/">Cardigans</Link></li>
                                                                    <li><Link to="/">Sweatshirts</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clothes-offers">
                                                        <div className="uk-panel">
                                                            <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                            <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                            <div className="price">
                                                                <span className="offer-price uk-margin-right">$199</span>
                                                                <span className="real-price" style={{textDecoration: 'line-through'}}>$225</span>
                                                            </div>
                                                        </div>
                                                        <div className="uk-panel">
                                                            <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                            <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                            <div className="price">
                                                                <span className="offer-price uk-margin-right">$199</span>
                                                                <span className="real-price" style={{textDecoration: 'line-through'}}>$225</span>
                                                            </div>
                                                        </div>
                                                        <div className="uk-panel">
                                                            <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                            <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                            <div className="price">
                                                                <span className="offer-price uk-margin-right">$199</span>
                                                                <span className="real-price" style={{textDecoration: 'line-through'}}>$225</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="some-other-content">
                                                        <div className="uk-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                        <div className="uk-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                        <div className="uk-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                        <div className="uk-placeholder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div title="Search Dukana" className="search uk-display-inline-block">
                                        <i data-uk-toggle="target: #modal-search" className="fa fa-search"></i>
                                        <div id="modal-search" className="uk-modal-full uk-modal uk-animation-slide-top" data-uk-modal>
                                            <div className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle">
                                                <button className="uk-modal-close-full" type="button" data-uk-close></button>
                                                <form className="uk-search uk-search-large">
                                                    <input className="uk-search-input uk-text-center" type="search" placeholder="Search Dukana..." autofocus="true" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="store-name uk-text-center">
                                    <Link to="/" className="uk-text-uppercase">Dukana</Link>
                                </div>
                                <div className="store-cart uk-text-center uk-text-right@s">
                                    <i title="Cart" className="fa fa-shopping-cart uk-margin-small-right" data-uk-toggle="target: #shopping-cart"><span className="uk-badge">3</span></i>
                                    <div id="shopping-cart" data-uk-modal>
                                        <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body" data-uk-overflow-auto>
                                            <button className="uk-modal-close-default" type="button" data-uk-close></button>
                                            <div className="cart-heading">
                                                <h4 className="uk-text-uppercase uk-text-center uk-margin-medium-bottom">Shopping Cart</h4>
                                            </div>
                                            <div className="uk-panel">
                                                <button className="uk-align-right" type="button" data-uk-close></button>
                                                <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                <div className="size">
                                                    <span>Size: <span className="value">6</span></span>
                                                </div>
                                                <div className="color">
                                                    <span>Color: <span className="value">Blue</span></span>
                                                </div>
                                                <div className="price">
                                                    <span>$178.66</span>
                                                </div>
                                            </div>
                                            <div className="uk-panel">
                                                <button className="uk-align-right" type="button" data-uk-close></button>
                                                <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                <div className="size">
                                                    <span>Size: <span className="value">6</span></span>
                                                </div>
                                                <div className="color">
                                                    <span>Color: <span className="value">Blue</span></span>
                                                </div>
                                                <div className="price">
                                                    <span>$178.66</span>
                                                </div>
                                            </div>
                                            <div className="uk-panel">
                                                <button className="uk-align-right" type="button" data-uk-close></button>
                                                <img className="uk-align-left uk-margin-remove-adjacent" src={menu_img} width="200" height="200" alt="menu-offer" />
                                                <h5 className="uk-text-uppercase">Happy Sweater</h5>
                                                <div className="size">
                                                    <span>Size: <span className="value">6</span></span>
                                                </div>
                                                <div className="color">
                                                    <span>Color: <span className="value">Blue</span></span>
                                                </div>
                                                <div className="price">
                                                    <span>$178.66</span>
                                                </div>
                                            </div>
                                            <ul className="uk-list">
                                                <li>2 items<span className="uk-align-right">$87.57</span></li>
                                                <li>Shipping<span className="uk-align-right">$7.66</span></li>
                                                <li>Taxes<span className="uk-align-right">$0.00</span></li>
                                            </ul>
                                            <hr className="uk-divider-small"></hr>
                                            <ul className="uk-list">
                                                <li>Total<span className="uk-align-right">$95.23</span></li>
                                            </ul>
                                            <div className="checkout-btn">
                                                <button className="uk-button uk-button-secondary uk-width-1-1">Processed to Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end upper bar of navbar */}

                    {/* start navbar content */}
                    <div className="fixed-nav-bar">
                        <div className="dukana-navar" data-uk-navbar data-uk-sticky="sel-target: .sticky-nav; cls-active: uk-navbar-sticky" style={window.location.pathname === '/' ? {background: this.state.background} : {background: '#262626'}}>
                            <div className="uk-container sticky-nav">
                                <div className="uk-navbar-center">
                                    <ul className="uk-navbar-nav uk-visible@m">
                                        <li>
                                            <NavLink to="/sports">Sports</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/jackets">Jackets</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/coats">Coats &amp; Shorts</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/t-shirts">T-shirts</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/outerwear">Outerwear</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/pans">Pans</NavLink>
                                        </li>
                                    </ul>
                                    {/* sidebar in small screen */}
                                    <div className="uk-hidden@m sidebar">
                                        <span data-uk-toggle="target: #offcanvas-usage" type="button"><i className="fa fa-align-right" aria-hidden="true"></i></span>
                                        <div id="offcanvas-usage" data-uk-offcanvas>
                                            <div className="uk-offcanvas-bar">
                                                <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                                                <h3 className="uk-text-uppercase"><NavLink to='/'>Dukana</NavLink></h3>
                                                <ul className="uk-list">
                                                    <li>
                                                        <NavLink to="/sports">Sports</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/jackets">Jackets</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/coats">Coats &amp; Shorts</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/t-shirts">T-shirts</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/outerwear">Outerwear</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/pans">Pans</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end navbar content */}
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;