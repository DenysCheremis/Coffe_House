import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';

import Title from '../../components/title/Title';

import coffeeBeansIconBlack from "../../icons/coffee-beans-title-black.svg"

import "./productDetails.scss"

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { request } = useHttp();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productsResponse = await request("http://localhost:3001/products");
                const bestProductsResponse = await request("http://localhost:3001/productsBest");
                const mergedProducts = [...productsResponse, ...bestProductsResponse];
                const foundProduct = mergedProducts.find(item => item.id === +id);

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setProduct(null);
                }
            } catch (error) {
                console.error('Помилка при завантаженні даних товару:', error);
                setProduct(null);
            }
        };

        fetchProduct();
    }, [id, request]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Title content="Our Coffee" clazz="coffee" />
            <div className="container">
                <div className='product-details' key={id} id={id}>
                    <img src={product.img} alt="coffee" className="product-details__img" />
                    <div className="product-details__about">
                        <h2 className="title">{product.name}</h2>
                        <div className="about__wrapper">
                            <div className="about__divider"></div>
                            <img src={coffeeBeansIconBlack} alt="" className="about__coffe-beans" />
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