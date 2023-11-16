import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateTotalItems } from '../../pages/cartPage/cartSlice';
import { useState } from 'react';

import "./homeBestItem.scss";

const HomeBestItem = ({ img, name, price, id, country }) => {

    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (event) => {
        event.preventDefault();
        const product = { img, name, price, id, country };

        dispatch(addToCart(product));
        dispatch(updateTotalItems());
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    }

    return (
        <Link to={`/products/${id}`} className="best__item">
            <img src={img} alt="coffe" className="best__item__img" />
            <div>
                <div className="best__item__title">{name}</div>
                <div className='best__item__wrapper'>
                    <button
                        className={`best__item__btn ${isAdded ? "added" : null}`}
                        onClick={handleAddToCart}>
                        {isAdded ? 'Added' : 'Add to cart'}
                    </button>
                    <div className="best__item__price">{`${price}$`}</div>
                </div>
            </div>
        </Link>
    )
}

export default HomeBestItem;