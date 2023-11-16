import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { addToCart, updateTotalItems } from '../cartPage/cartSlice';

import Title from '../../components/title/Title';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import coffeeBeansIconBlack from "../../icons/coffee-beans-title-black.svg"

import "./productDetailsPage.scss"

const ProductDetailsPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isAdded, setIsAdded] = useState(false);
    const { request } = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productsResponse = await request("http://localhost:3001/products");
                const bestProductsResponse = await request("http://localhost:3001/productsBest");
                const allProducts = [...productsResponse, ...bestProductsResponse];
                const foundProduct = allProducts.find(item => item.id === +id);

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
    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = (event) => {
        event.preventDefault();

        dispatch(addToCart(product));
        dispatch(updateTotalItems());
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    }

    return (
        <>
            <Helmet>
                <meta name="description" content={`${product.name} comics book`} />
                <title>{product.name}</title>
            </Helmet>
            <Header />
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
                        <div className='product-details__wrapper'>
                            <div className="product-details__price"><span>Price:</span> {`${product.price}$`}</div>
                            <button
                                className={`product-details__btn ${isAdded ? "added" : null}`}
                                onClick={handleAddToCart}>
                                {isAdded ? 'Added' : 'Add to cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetailsPage;