import bin from '../../icons/bin.svg'
import { useDispatch } from 'react-redux';
import { removeFromCart, updateTotalItems } from '../../pages/cartPage/cartSlice';

import QuantitySelector from '../quantitySelector/QuantitySelector';

import './cartListItem.scss';


const CartListItem = ({ name, country, img, price, id, quantity }) => {
    const dispatch = useDispatch();
    const product = { name, country, img, price, id, quantity };

    const handlerRemoveFromCart = () => {
        dispatch(removeFromCart(id));
        dispatch(updateTotalItems());
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
                            <QuantitySelector product={product} />
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