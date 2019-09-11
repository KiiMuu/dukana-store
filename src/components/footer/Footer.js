import React from 'react';
import '../footer/Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="uk-container">
                    <div className="footer-content">
                        <div className="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@l" data-uk-grid>
                            <div className="dukana-socials">
                                <h3 className="uk-text-uppercase dukana"><Link to="/">Dukana</Link></h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="socials">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-pinterest"></i>
                                </div>
                                <div className="subscribe">
                                    <div className="uk-margin">
                                        <div className="uk-inline">
                                            <form>
                                                <input type="email" className="uk-width-1-1" placeholder="Enter your e-mail" required />
                                                <button className="uk-text-uppercase" type="submit">Send</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dukana-products">
                                <h3 className="uk-text-capitalize">Products</h3>
                                <ul className="uk-list">
                                    <li className="uk-text-capitalize"><Link to="/">Price drop</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">New products</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Best sales</Link></li>
                                </ul>
                            </div>
                            <div className="dukana-info">
                                <h3 className="uk-text-capitalize">Information</h3>
                                <ul className="uk-list">
                                    <li className="uk-text-capitalize"><Link to="/">Delivery</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Legal notice</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Terms &amp; conditions of use</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">About us</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Secure payment</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Contact us</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Sitemap</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Stores</Link></li>
                                </ul>
                            </div>
                            <div className="dukana-account">
                                <h3 className="uk-text-capitalize">Your account</h3>
                                <ul className="uk-list">
                                    <li className="uk-text-capitalize"><Link to="/">Addresses</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Credit slips</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Orders</Link></li>
                                    <li className="uk-text-capitalize"><Link to="/">Personal info</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dukana-copyright uk-text-center">
                <div className="uk-container">
                    <p>&copy; {new Date().getFullYear()} - E-commerce software By <a href="https://github.com/KiiMuu" rel="noopener noreferrer" target="_blank">KiiMuu</a></p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer; 