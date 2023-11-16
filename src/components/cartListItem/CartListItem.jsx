import bin from '../../icons/bin.svg'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeFromCart, updateTotalItems, addToCart, removeOneItemFromCart } from '../../pages/cartPage/cartSlice';

import './cartListItem.scss';


const CartListItem = ({ name, country, img, price, id, quantity }) => {
    const dispatch = useDispatch();
    const product = { name, country, img, price, id };

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

    const handlerRemoveFromCart = () => {
        dispatch(removeFromCart(id));
        dispatch(updateTotalItems());
        // dispatch(updateSubtotal());
    }

    return (
        <>
            <div className="cart-list-item">
                <div className='cart-list-item__wrapper'>
                    <img className="cart-list-item__img" src={img} alt="" />
                    <div className="cart-list-item__info">
                        <div className="cart-list-item__name">{name}</div>
                        <div className="cart-list-item__country">Country: {country}</div>
                        <div className="cart-list-item__quantiti">
                            Quantity:
                            <button className='cart-list-item__quantiti__minus' onClick={minusQuantiti}>-</button>
                            {quantity}
                            <button className='cart-list-item__quantiti__plus' onClick={plusQuantiti}>+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart-list-item__price">{(price * quantity).toFixed(2)}$</div>
                    <button className='cart-list-item__removeBtn' onClick={handlerRemoveFromCart}>
                        <img className='cart-list-item__button__img' src={bin} alt="bin" />
                    </button>
                </div>
            </div>
            <div className="cart-list-item__divider"></div>
        </>
    )
}

export default CartListItem;