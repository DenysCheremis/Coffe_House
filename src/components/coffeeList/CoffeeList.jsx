import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { setBtnContentToAllProducts, setBtnContentToLoadMore } from './coffeeSlice';

import CoffeeListItem from '../coffeeListItem/CoffeeListItem';
import Spinner from '../spinner/Spinner';

import './coffeeList.scss';

const CoffeeList = ({ products }) => {

    const [loadedProducts, setLoadedProducts] = useState(6);
    const coffeeLoadingStatus = useSelector(state => state.coffee.coffeeLoadingStatus);
    const btnContent = useSelector(state => state.coffee.btnContent);
    const dispatch = useDispatch();

    const loadMoreProducts = () => {
        if (loadedProducts < products.length) {
            setLoadedProducts(prevLoadedProducts => prevLoadedProducts + 6);
            dispatch(setBtnContentToLoadMore());
        } else {
            dispatch(setBtnContentToAllProducts());
        }
    }

    const elements = coffeeLoadingStatus === 'loading' ?
        <Spinner /> :
        products.slice(0, loadedProducts).map(item => {
            const { id, ...itemProps } = item;
            return <CoffeeListItem key={id} id={id} {...itemProps} />
        })

    return (
        <section className='coffee-list'>
            <div className='container'>
                <div className='coffee-list__wrapper'>
                    {elements}
                </div>
                <button className='btn_load-more' onClick={loadMoreProducts}>{btnContent}</button>
            </div>
        </section>
    )
}

export default CoffeeList;