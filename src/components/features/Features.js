import React, { Component } from 'react';
import './Features.scss';
import { DukanaConsumer } from '../Context';
import FeaturesBox from './FeaturesBox';

class Features extends Component {
    render() {
        return (
            <div className="dukana-features uk-text-center">
                <div className="uk-container">
                    <div data-uk-grid uk-height-match="target: div > .feature-box">
                        <DukanaConsumer>
                            {value => {
                                return value.features.map(feature => {
                                    return <FeaturesBox key={feature.id} feature={feature} />
                                });
                            }}
                        </DukanaConsumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;
