import { addToCart, updateTotalItems } from '../../pages/cartPage/cartSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './buttonAddToCart.scss';

const ButtonAddToCart = ({ product, additionalClass }) => {

    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

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
        <button
            className={`btn-add-to-cart ${isAdded ? "added" : null} ${additionalClass}`}
            onClick={handleAddToCart}>
            {isAdded ? 'Added' : 'Add to cart'}
        </button>
    )
}

export default ButtonAddToCart;