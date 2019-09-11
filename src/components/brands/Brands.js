import React, { Component } from 'react';
import './Brands.scss';
import { DukanaConsumer } from '../Context';
import BrandsItem from './BrandsItem';

class Brands extends Component {
    render() {
        return (
            <div className="brands">
                <div className="uk-container-fluid">
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider>
                        <div className="uk-slider-items uk-grid-collapse uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m" data-uk-grid>
                            <DukanaConsumer>
                                {value => {
                                    return value.brands.map(brand => {
                                        return <BrandsItem key={brand.id} brand={brand} />
                                    });
                                }}
                            </DukanaConsumer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brands;