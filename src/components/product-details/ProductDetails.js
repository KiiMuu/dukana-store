import React, { Component, Fragment } from 'react';
import { DukanaConsumer } from '../Context';
import './ProductDetails.scss';

class ProductDetails extends Component {
    render() {
        return (
            <DukanaConsumer>
                {value => {
                    const { 
                        id,
                        topTrendingPic, 
                        topTrendingTitle,
                        topTrendingPrice,
                        isDiscount,
                        discountPrice,
                    } = value.productDetails;
                    return(
                        <Fragment>
                            <div className="product-details">
                                <div className="uk-container">
                                    <div className="uk-child-width-1-2@l" data-uk-grid>
                                        <div className="product-imgs">
                                            <div data-uk-slideshow="animation: pull">
                                                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
                                                    <ul key={id} class="uk-slideshow-items" data-uk-height-viewport>
                                                        <li>
                                                            <img src={topTrendingPic} alt={topTrendingTitle} data-uk-cover />
                                                        </li>
                                                        <li>
                                                            <img src={topTrendingPic} alt={topTrendingTitle} data-uk-cover />
                                                        </li>
                                                        <li>
                                                            <img src={topTrendingPic} alt={topTrendingTitle} data-uk-cover />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h3>{topTrendingTitle}</h3>
                                            <span className="uk-margin-small-right" style={ isDiscount === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>${topTrendingPrice}</span>
                                            { isDiscount === true ? <span>${discountPrice}</span> : null }
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            <div className="social-networks">
                                                <i className="fa fa-facebook"></i>
                                                <i className="fa fa-twitter"></i>
                                                <i className="fa fa-instagram"></i>
                                                <i className="fa fa-pinterest"></i>
                                            </div>
                                            <div className="size uk-flex-middle" data-uk-grid>
                                                <span>Size:</span>
                                                <div className="uk-width-small">
                                                    <select className="uk-select">
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                        <option>L</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="color uk-flex-middle" data-uk-grid>
                                                <span>Color:</span>
                                                <div className="uk-width-small">
                                                    <span className="grey"></span>
                                                    <span className="brown"></span>
                                                    <span className="purple"></span>
                                                </div>
                                            </div>
                                            <div className="quantity uk-flex-middle" data-uk-grid>
                                                <span>Quantity:</span>
                                                <div className="uk-width-small">
                                                    <input className="uk-input" type="number" />
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="uk-button uk-button-secondary">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-desc">
                                <div className="uk-container">
                                    <ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                                        <li><a href="/">Information</a></li>
                                        <li><a href="/">Description</a></li>
                                        <li><a href="/">Other Info</a></li>
                                        <li><a href="/">Video</a></li>
                                        <li><a href="/">Custom Tab</a></li>
                                    </ul>

                                    <ul className="uk-switcher uk-margin">
                                        <li>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        </li>
                                        <li>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        </li>
                                        <li>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        </li>
                                        <li>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        </li>
                                        <li>
                                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Fragment>
                    );
                }}
            </DukanaConsumer>
        )
    }
}

export default ProductDetails;