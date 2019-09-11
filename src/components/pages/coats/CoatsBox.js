import React, { Component } from 'react';
import '../Pages.scss';
import { DukanaConsumer } from '../../Context';

export default class CoatsBox extends Component {
    render() {
        const { 
            id, 
            coatsTitle,
            isNew,
            isDiscount,
            coatsPic,
            coatsPrice
        } = this.props.coat;

        return (
            <DukanaConsumer>
                {value => {
                    return(
                        <div className="box">
                            <div className="uk-inline-clip uk-transition-toggle uk-light" tabIndex="0" key={id}>
                                <img src={coatsPic} alt={coatsTitle} draggable="false" />
                                <div className="uk-position-absolute uk-position-right">
                                    <span>{ isNew === true ? <span className="new">New</span> : null }</span>
                                </div>
                                <div className="uk-position-absolute uk-position-left">
                                    <span>{ isDiscount === true ? <span className="discount">-20</span> : null }</span>
                                </div>
                                <div className="uk-position-center uk-text-center">
                                    <div className="product-info">
                                        <div className="uk-transition-slide-top-medium">
                                            <h4>{coatsTitle}</h4>
                                        </div>
                                        <div className="uk-transition-slide-bottom-medium top-trending-price">
                                            <span className="uk-margin-small-right" style={ isDiscount === true ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>${coatsPrice}</span>
                                            { isDiscount === true ? <span>${coatsPrice}</span> : null }
                                        </div>
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
