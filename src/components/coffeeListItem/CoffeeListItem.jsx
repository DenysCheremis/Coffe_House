import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateTotalItems } from '../../pages/cartPage/cartSlice';
import { useState } from 'react';

import "./coffeeListItem.scss";

const CoffeeListItem = ({ img, name, country, price, id }) => {

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
        <Link to={`/products/${id}`} className="coffee-list__item">
            <img src={img} alt="coffe" className="coffee-list__item__img" />
            <div className="coffee-list__item__title">{name}</div>
            <div className="coffee-list__item__country">{country}</div>
            <div className='coffee-list__item__wrapper'>
                <button
                    className={`coffee-list__item__btn ${isAdded ? "added" : null}`}
                    onClick={handleAddToCart}>
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
                <div className="coffee-list__item__price">{`${price}$`}</div>
            </div>

        </Link>
    )
}

export default CoffeeListItem;