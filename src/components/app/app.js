import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Homepage from '../../pages/homePage/homePage';
import OurCoffe from '../../pages/ourCoffe/ourCoffe';
import ForYourPleasure from '../../pages/forYourPleasure/forYourPleasure';
import ProductDetails from '../../pages/productDetails/productDetails';

import aromaticoImage from "../../img/items-img/aromatico.jpg";
import solimoImage from "../../img/items-img/solimo.jpg";
import prestoImage from "../../img/items-img/presto.jpg";
import detailsImage from "../../img/details-img.jpg"

import './app.scss';

class App extends Component {

    render() {
        // const products = [
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "Solimo Coffee Beans 2 kg",
        //         country: "Brazil",
        //         price: "10.73",
        //         id: 1,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "Presto Coffee Beans 1 kg",
        //         country: "Kenya",
        //         price: "15.99",
        //         id: 2,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "AROMISTICO Coffee 1 kg",
        //         country: "Columbia",
        //         price: "6.99",
        //         id: 3,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "Solimo Coffee Beans 2 kg",
        //         country: "Kenya",
        //         price: "10.73",
        //         id: 4,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "Presto Coffee Beans 1 kg",
        //         country: "Columbia",
        //         price: "15.99",
        //         id: 5,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "AROMISTICO Coffee 1 kg",
        //         country: "Brazil",
        //         price: "6.99",
        //         id: 6,
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     }
        // ]

        // const productsBest = [
        //     {
        //         img: solimoImage,
        //         detailsImg: detailsImage,
        //         name: "Solimo Coffee Beans 2 kg",
        //         price: "10.73",
        //         id: 7,
        //         country: "Kenya",
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: prestoImage,
        //         detailsImg: detailsImage,
        //         name: "Presto Coffee Beans 1 kg",
        //         price: "15.99",
        //         id: 8,
        //         country: "Brazil",
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     },
        //     {
        //         img: aromaticoImage,
        //         detailsImg: detailsImage,
        //         name: "AROMISTICO Coffee 1 kg",
        //         price: "6.99",
        //         id: 9,
        //         country: "Columbia",
        //         descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        //     }
        // ]

        return (
            <>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="our-coffee" element={<OurCoffe />} />
                        <Route path="for-your-pleasure" element={<ForYourPleasure />} />
                        <Route path="products/:id" element={<ProductDetails />} />
                    </Route>
                </Routes>
            </>
        )
    }
}

export default App;