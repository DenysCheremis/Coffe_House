import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../../pages/homePage/homePage';
import OurCoffePage from '../../pages/ourCoffePage/ourCoffePage';
import ForYourPleasurePage from '../../pages/forYourPleasurePage/forYourPleasurePage';
import ProductDetailsPage from '../../pages/productDetailsPage/productDetailsPage';
import CartPage from '../../pages/cartPage/CartPage';

import aromaticoImage from "../../img/items-img/aromatico.jpg";
import solimoImage from "../../img/items-img/solimo.jpg";
import prestoImage from "../../img/items-img/presto.jpg";
import detailsImage from "../../img/details-img.jpg"

import './app.scss';

class App extends Component {

    render() {
        return (
            <>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="our-coffee" element={<OurCoffePage />} />
                    <Route path="for-your-pleasure" element={<ForYourPleasurePage />} />
                    <Route path="your-cart" element={<CartPage />} />
                    <Route path="products/:id" element={<ProductDetailsPage />} />
                </Routes>
            </>
        )
    }
}

export default App;