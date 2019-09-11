import React from 'react';
import './DiscoverMore.scss';
import discoverImg from '../../imgs/discover-more/discover-more.jpg';
import { Link } from 'react-router-dom';

const DiscoverMore = () => {
    return (
        <div className="discover-more">
            <div className="uk-container-fluid">
                <div className="uk-grid-collapse uk-child-width-1-2@l uk-text-center" data-uk-grid>
                    <div className="discover-img">
                        <img src={discoverImg} alt="Discovery" />
                    </div>
                    <div className="discover-info uk-flex uk-flex-middle uk-flex-column">
                        <h3 className="uk-text-uppercase">Shoes &amp; Coats</h3>
                        <hr className="uk-divider-small"></hr>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <span className="uk-text-uppercase">
                            <Link to="/">Discover More <i className="fa fa-long-arrow-right"></i></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverMore;
