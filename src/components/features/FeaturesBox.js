import React, { Component } from 'react';
import './Features.scss';
import { DukanaConsumer } from '../Context';

export default class FeaturesBox extends Component {
    render() {
        const { id, featurePic, imgTitle, featureTitle, featureDescription } = this.props.feature;
        return (
            <DukanaConsumer>
                {value => {
                    return(
                        <div className="uk-width-1-3@m">
                            <div>
                                <div className="feature-box uk-box-shadow-medium">
                                    <div className="feature-img">
                                        <img src={featurePic} height="60" width="60" alt={imgTitle} draggable="false" />
                                    </div>
                                    <div className="feature-title">
                                        <h4 className="uk-text-uppercase" key={id}>{featureTitle}</h4>
                                    </div>
                                    <div className="feature-desc">
                                        <p className="uk-text-muted">{featureDescription}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )
                }}
            </DukanaConsumer>
        )
    }
}
