import React, { Component } from 'react';
import './Categories.scss';
import CategoriesBox from './CategoryBox';
import { DukanaConsumer } from '../Context';

class Categories extends Component {
    render() {
        return (
            <div className="dukana-categories">
                <div className="uk-container">
                    <div className="uk-grid-small" data-uk-grid uk-height-match="target: div > .category-box">
                        <DukanaConsumer>
                            {value => {
                                return value.categories.map(category => {
                                    return <CategoriesBox key={category.id} category={category} />
                                });
                            }}
                        </DukanaConsumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;