import React, { Component } from 'react';
import '../Pages.scss';
import { DukanaConsumer } from '../../Context';
import OuterwearBox from './OuterwearBox';

class Outerwear extends Component {
    render() {
        return (
            <div className="outerwear">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="sidebar uk-width-1-4@m">
                            <ul data-uk-accordion>
                                <li>
                                    <button className="uk-accordion-title uk-text-uppercase">Top</button>
                                    <div className="uk-accordion-content">
                                        <ul className="uk-list">
                                            <li>Top 1</li>
                                            <li>Top 2</li>
                                            <li>Top 3</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="uk-open">
                                    <button className="uk-accordion-title uk-text-uppercase">Outerwear</button>
                                    <div className="uk-accordion-content">
                                        <ul className="uk-list">
                                            <li>Outerwear</li>
                                            <li>T-shirts</li>
                                            <li>T-shirts &amp; Coats</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <h5 className="uk-text-uppercase">Filter By</h5>
                            <h6>Categories</h6>
                            <div class="uk-margin uk-grid-small uk-child-width-auto">
                                <div><label><input class="uk-checkbox" type="checkbox" /> Dresses</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Blouses</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Outwear</label></div>
                            </div>
                            <h6>Color</h6>
                            <div class="uk-margin uk-grid-small uk-child-width-auto">
                                <div><label><input class="uk-checkbox" type="checkbox" /> Gray</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Brown</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Purple</label></div>
                            </div>
                            <h6>Composition</h6>
                            <div class="uk-margin uk-grid-small uk-child-width-auto">
                                <div><label><input class="uk-checkbox" type="checkbox" /> Cotton</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Polyester</label></div>
                                <div><label><input class="uk-checkbox" type="checkbox" /> Viscose</label></div>
                            </div>
                            <button className="uk-button uk-button-secondary">Clear Filters</button>
                        </div>
                        <div className="main uk-width-3-4@m">
                            <h3>Outerwear</h3>
                            <p className="uk-text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div>
                                <div className="uk-child-width-1-3@m uk-grid-small" data-uk-grid>
                                    <DukanaConsumer>
                                        {value => {
                                            return value.outerwears.map(outerwear => {
                                                return <OuterwearBox key={outerwear.id} outerwear={outerwear} />
                                            });
                                        }}
                                    </DukanaConsumer>
                                </div>
                                <ul className="uk-pagination uk-flex-center" data-uk-margin>
                                    <li><a href="/"><span data-uk-pagination-previous></span></a></li>
                                    <li><a href="/">1</a></li>
                                    <li className="uk-disabled"><span>...</span></li>
                                    <li><a href="/">4</a></li>
                                    <li><a href="/">5</a></li>
                                    <li><a href="/">6</a></li>
                                    <li className="uk-active"><span>7</span></li>
                                    <li><a href="/">8</a></li>
                                    <li><a href="/">9</a></li>
                                    <li><a href="/">10</a></li>
                                    <li className="uk-disabled"><span>...</span></li>
                                    <li><a href="/">20</a></li>
                                    <li><a href="/"><span data-uk-pagination-next></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Outerwear;
