import React, { Component } from 'react';
import './TopTrending.scss';
import { DukanaConsumer } from '../Context';
import { Link } from 'react-router-dom';

export default class TopTrendingBox extends Component {
    render() {
        const { 
            id, 
            topTrendingPic, 
            className,
            topTrendingTitle,
            isNew,
            topTrendingPrice,
            isDiscount,
            discountPrice,
            topTrendingbutton
        } = this.props.trend;

        return (
            <DukanaConsumer>
                {value => {
                    return(
                        <li className={className}>
                            <div className="our-products uk-animation-scale-up">
                                <div className="uk-inline-clip uk-transition-toggle uk-light" tabIndex="0">
                                    <img src={topTrendingPic} alt={className} draggable="false" />
                                    <div className="uk-position-absolute uk-position-right">
                                        <span>{ isNew === true ? <span className="new">New</span> : null }</span>
                                    </div>
                                    <div className="uk-position-absolute uk-position-left">
                                        <span>{ isDiscount === true ? <span className="discount">-20</span> : null }</span>
                                    </div>
                                    <div className="uk-position-center uk-text-center">
                                        <div className="product-info">
                                            <div className="uk-transition-slide-top-medium">
                                                <h4>{topTrendingTitle}</h4>
                                            </div>
                                            <div className="uk-transition-slide-bottom-medium quick-view">
                                                <span>
                                                    <Link to="/product-details" onClick={() => value.handleProductDetails(id)}><button className="uk-margin-remove uk-button uk-button-default">{topTrendingbutton} <i className="fa fa-long-arrow-right"></i></button></Link>
                                                </span>
                                            </div>
                                            <div className="uk-transition-slide-bottom-medium top-trending-price">
                                                <span className="uk-margin-small-right" style={ isDiscount === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>${topTrendingPrice}</span>
                                                { isDiscount === true ? <span>${discountPrice}</span> : null }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }}
            </DukanaConsumer>
        )
    }
}
