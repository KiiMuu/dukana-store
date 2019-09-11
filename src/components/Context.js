import React, { Component } from 'react';
import { 
    dukanaFeatures, 
    dukanaCategories, 
    dukanaTopTrending, 
    productDetails,
    dukanaBrands,
    dukanaSports,
    dukanaJackets,
    dukanaCoats,
    dukanaTshirts,
    dukanaOuterwear,
    dukanaPans
} from '../dukana-data';

const DukanaContext = React.createContext();

export default class DukanaProvider extends Component {

    state = {
        features: dukanaFeatures,
        categories: dukanaCategories, 
        topTrending: dukanaTopTrending,
        productDetails: productDetails,
        brands: dukanaBrands,
        sports: dukanaSports,
        jackets: dukanaJackets,
        coats: dukanaCoats,
        shirts: dukanaTshirts,
        outerwears: dukanaOuterwear,
        pans: dukanaPans
    }

    getProduct = id => {
        const product = this.state.topTrending.find(product => product.id === id);
        return product;
    }

    handleProductDetails = id => {
        const product = this.getProduct(id);
        this.setState(() => {
            return {
                productDetails: product
            }
        })
    }

    render() {
        return (
            <DukanaContext.Provider value={{
                features: this.state.features,
                categories: this.state.categories,
                topTrending: this.state.topTrending,
                productDetails: this.state.productDetails,
                productName: this.state.productName,
                handleProductDetails: this.handleProductDetails,
                brands: this.state.brands,
                sports: this.state.sports,
                jackets: this.state.jackets,
                coats: this.state.coats,
                tshirts: this.state.shirts,
                outerwears: this.state.outerwears,
                pans: this.state.pans
            }}>
                {this.props.children}
            </DukanaContext.Provider>
        )
    }
}

const DukanaConsumer = DukanaContext.Consumer;

export { DukanaProvider, DukanaConsumer };