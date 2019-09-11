import React from 'react';
import './Header.scss';
import header_img1 from '../../imgs/header/header1.JPG';
import header_img2 from '../../imgs/header/header2.JPG';
import header_img3 from '../../imgs/header/header3.jpg';

const Header = () => {
  return (
    <div className="dukana-header">
        <div className="uk-visible-toggle uk-light" data-uk-slideshow="min-height: 450; animation: push; autoplay: true; pause-on-hover: true">
            <ul className="uk-slideshow-items">
              <li>
                  <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img className="uk-background-fixed" src={header_img1} alt="Header" data-uk-cover />
                  </div>
                  <div className="uk-overlay-primary uk-position-cover"></div>
                  <div className="uk-container uk-position-center-left uk-position-small">
                      <div className="header-content">
                        <h2 className="uk-text-uppercase">Dukana Store</h2>
                        <p className="uk-container-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Discovery more</button>
                      </div>
                  </div>
              </li>
              <li>
                  <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img className="uk-background-fixed" src={header_img2} alt="Header" data-uk-cover />
                  </div>
                  <div className="uk-overlay-primary uk-position-cover"></div>
                  <div className="uk-container uk-position-center-left uk-position-small">
                      <div className="header-content">
                        <h2 className="uk-text-uppercase">Coats &amp; Shorts</h2>
                        <p className="uk-container-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Discovery more</button>
                      </div>
                  </div>
              </li>
              <li>
                  <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img className="uk-background-fixed" src={header_img3} alt="Header" data-uk-cover />
                  </div>
                  <div className="uk-overlay-primary uk-position-cover"></div>
                  <div className="uk-container uk-position-center-left uk-position-small">
                      <div className="header-content">
                        <h2 className="uk-text-uppercase">Jackets</h2>
                        <p className="uk-container-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Discovery more</button>
                      </div>
                  </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;