import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// components
import Index from './components/index/Index';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/product-details/ProductDetails';
import Footer from './components/footer/Footer';

// external pages
import Sports from './components/pages/sports/Sports';
import Jackets from './components/pages/jackets/Jackets';
import Coats from './components/pages/coats/Coats';
import Tshirt from './components/pages/tshirts/Tshirts';
import Outerwear from './components/pages/outerwear/Outerwear';
import Pans from './components/pages/pans/Pans';

const App = () => {
	return(
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Index} />
					{/* external pages */}
					<Route path="/product-details" component={ProductDetails} />
					<Route path="/sports" component={Sports} />
					<Route path="/jackets" component={Jackets} />
					<Route path="/coats" component={Coats} />
					<Route path="/t-shirts" component={Tshirt} />
					<Route path="/outerwear" component={Outerwear} />
					<Route path="/pans" component={Pans} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
