import React, { Component } from 'react';
import './Categories.scss';
import { DukanaConsumer } from '../Context';
import { Link } from 'react-router-dom';

class CategoryBox extends Component {
    render() {
        const { id, categoryPic, categoryTitle } = this.props.category;
        return (
            <DukanaConsumer>
                {value => {
                    return(
                        <div className="uk-width-1-2@m uk-width-1-4@l">
                            <div>
                                <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                    <img key={id} src={categoryPic} alt={categoryTitle} draggable="false" />
                                    <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay">
                                        <Link to="/"><button className="uk-align-center uk-button uk-button-default">{categoryTitle}</button></Link>
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

export default CategoryBox;
