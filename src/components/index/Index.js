import React from 'react';

// import all components here
import Header from '../header/Header';
import Features from '../features/Features';
import Categories from '../categories/Categories';
import TopTrending from '../top-trending/TopTrending';
import DiscoverMore from '../discover-more/DiscoverMore';
import Brands from '../brands/Brands';
import InstagramSection from '../#instagram-section/InstagramSection';
import Map from '../dukana-map/Map';

const Index = () => {
	return(
        <React.Fragment>
            <Header />
            <Features />
            <Categories />
            <TopTrending />
            <DiscoverMore />
            <Brands />
            <InstagramSection />
            <Map />
        </React.Fragment>
    );
}

export default Index;
