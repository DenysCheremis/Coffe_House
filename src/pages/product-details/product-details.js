import React from 'react';
import { useParams } from 'react-router-dom';
import Title from "../../components/title/title"

import coffeeBeansIconBlack from "../../icons/coffee-beans-title-black.svg"

import "./product-details.scss"

const ProductDetails = ({ products, productsBest }) => {
    const { id } = useParams();

    const allProduct = [...products, ...productsBest];

    const product = allProduct.find(item => item.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Title content="Our Coffee" clazz="coffee"/>
            <div className="container">
                <div className='product-details'>
                    <img src={product.detailsImg} alt="coffee" className="product-details__img" />
                    <div className="product-details__about">
                        <h2 className="title">About Us</h2>
                        <div className="about__wrapper">
                            <div className="about__divider"></div>
                            <img src={coffeeBeansIconBlack} alt="" className="about__coffe-beans"/>
                            <div className="about__divider"></div>
                        </div>
                        <div className="product-details__country"><span>Country:</span> {product.country}</div>
                        <div className="product-details__descr"><span>Description:</span> {product.descr}</div>
                        <div className="product-details__price"><span>Price:</span> {`${product.price}$`}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;