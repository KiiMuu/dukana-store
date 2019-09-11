import React, { Component } from 'react';
import './TopTrending.scss';
import { DukanaConsumer } from '../Context';
import TopTredingBox from './TopTredingBox';
import { Link } from 'react-router-dom';


class TopTrending extends Component {
    render() {
        return (
            <div className="dukana-top-trending">
                <div className="uk-container-fluid">
                    <div className="top-trending-heading uk-text-center">
                        <h1 className="uk-text-uppercase">Top Trending</h1>
                        <hr className="uk-divider-small"></hr>
                        <p className="uk-text-muted uk-margin-large-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div data-uk-filter="target: .js-filter">
                        <ul className="uk-subnav uk-subnav-pill uk-margin-medium-bottom">
                            <li data-uk-filter-control=""><a href="#" className="uk-text-uppercase">All</a></li>
                            <li data-uk-filter-control=".new-products"><a href="#" className="uk-text-uppercase">New products</a></li>
                            <li data-uk-filter-control=".prices-drop"><a href="#" className="uk-text-uppercase">Prices drop</a></li>
                            <li data-uk-filter-control=".best-sales"><a href="#" className="uk-text-uppercase">Best Sales</a></li>
                        </ul>
                        <ul className="js-filter uk-grid-collapse uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-small" data-uk-grid="masonry: true">
                            <DukanaConsumer>
                                {value => {
                                    return value.topTrending.map(trend => {
                                        return <TopTredingBox key={trend.id} trend={trend} />
                                    });
                                }}
                            </DukanaConsumer>
                        </ul>
                        <div className="products-button uk-text-center uk-margin-medium-top">
                            <span>
                                <Link to="/"><button className="uk-text-uppercase">See all products <i className="fa fa-long-arrow-right"></i></button></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopTrending;