import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Homepage from '../../pages/home-page/home-page';
import OurCoffe from '../../pages/our-coffe/our-coffe';
import ForYourPleasure from '../../pages/for-your-pleasure/for-your-pleasure';
import ProductDetails from '../../pages/product-details/product-details';

import aromaticoImage from "../../img/items-img/aromatico.jpg";

import './app.scss';

class App extends Component {

    render(){
        const products = [
            {img: aromaticoImage, name:"Solimo Coffee Beans 2 kg", country: "Brazil", price:"10.73", id: 1},
            {img: aromaticoImage, name:"Presto Coffee Beans 1 kg", country: "Kenya", price:"15.99", id: 2},
            {img: aromaticoImage, name:"AROMISTICO Coffee 1 kg", country: "Columbia", price:"6.99", id: 3},
            {img: aromaticoImage, name:"Solimo Coffee Beans 2 kg", country: "Kenya", price:"10.73", id: 4},
            {img: aromaticoImage, name:"Presto Coffee Beans 1 kg", country: "Columbia", price:"15.99", id: 5},
            {img: aromaticoImage, name:"AROMISTICO Coffee 1 kg", country: "Brazil", price:"6.99", id: 6}
        ]

        return(
            <>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="our-coffee" element={<OurCoffe products={products}/>}/>
                        <Route path="for-your-pleasure" element={<ForYourPleasure products={products}/>}/>
                        <Route path="products/:id" element={<ProductDetails products={products}/>}/>
                    </Route>
                </Routes>
            </>
        )
    }
}

export default App;