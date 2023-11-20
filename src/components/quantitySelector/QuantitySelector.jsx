import { useEffect } from 'react';
import { removeFromCart, addToCart, removeOneItemFromCart } from '../../pages/cartPage/cartSlice';
import { useDispatch } from 'react-redux';

import './quantitySelector.scss';

const QuantitySelector = ({ product }) => {
    const { quantity, id } = product;

    const dispatch = useDispatch();

    useEffect(() => {
        if (quantity < 1) {
            dispatch(removeFromCart(id));
        }
    }, [quantity]);

    const plusQuantiti = () => {
        dispatch(addToCart(product));
    }

    const minusQuantiti = () => {
        dispatch(removeOneItemFromCart(product));
    }


    return (
        <div className='quantiti-selector'>
            <button className='quantiti-selector__minus' onClick={minusQuantiti}>-</button>
            <div>{quantity}</div>
            <button className='quantiti-selector__plus' onClick={plusQuantiti}>+</button>
        </div>
    )
}

export default QuantitySelector;