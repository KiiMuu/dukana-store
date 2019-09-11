import React, { Component } from 'react';
import './Brands.scss';
import { DukanaConsumer } from '../Context';

export default class BrandsItem extends Component {
    render() {
        const { id, brandItem } = this.props.brand;
        return (
            <DukanaConsumer>
                {value => {
                    return(
                        <li>
                            <img key={id} src={brandItem} alt="brand-logo" />
                        </li>
                    )
                }}
            </DukanaConsumer>
        )
    }
}
