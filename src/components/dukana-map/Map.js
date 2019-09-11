import React from 'react';
import './Map.scss';

const Map = () => {
    return (
        <div className="dukana-map">
            <div className="uk-container-fluid">
                <div data-uk-grid>
                    <div className="uk-width-1-1@s">
                        <div className="map-content">
                            <div className="info uk-flex uk-container uk-flex-center uk-flex-middle">
                                <div className="info-content uk-card uk-card-default uk-card-body uk-width-1-2@m">
                                    <ul className="uk-list">
                                        <li><i className="fa fa-map-marker"></i> Chicago, Illinois, USA</li>
                                        <li><i className="fa fa-phone"></i> 0123-456-789</li>
                                        <li><i className="fa fa-envelope"></i> dukana@dukana.com</li>
                                        <li><i className="fa fa-calendar"></i> Mon - Sun: 09:00 - 20:00</li>
                                    </ul>
                                </div>
                            </div>
                            <iframe title="Just a map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3636175.570139567!2d-87.7992297423583!3d41.54795665165641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b7b7c65032f473%3A0x3ff431d3c7f4fd6f!2sWest+End+Travel+Inc%2C+Connecticut+Avenue+Northwest%2C+Washington%2C+DC%2C+USA!3m2!1d38.905215!2d-77.04119949999999!4m5!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C+Illinois%2C+USA!3m2!1d41.8781136!2d-87.6297982!5e0!3m2!1sen!2seg!4v1516507772793" style={{ background: '#000' ,border: '0', width: '100%', height: '450px', frameborder: '0' }} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;