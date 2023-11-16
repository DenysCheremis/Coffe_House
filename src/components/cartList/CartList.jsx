import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
// import { useEffect } from "react"
import { updateTotalItems } from "../../pages/cartPage/cartSlice"

import CartListItem from "../cartListItem/CartListItem"

import './cartList.scss'
import { useEffect } from "react";

const CartList = () => {

    const cartProducts = useSelector(state => state.cart.cartProducts);
    const subtotal = useSelector(state => state.cart.subtotal);
    const delivery = useSelector(state => state.cart.delivery);
    const totalItems = useSelector(state => state.cart.totalItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateTotalItems());
    }, [cartProducts]);

    let visibleDelivery = subtotal < 50 && cartProducts.length > 0 ? delivery + '$' : "Free";
    const total = subtotal < 50 && cartProducts.length > 0 ? subtotal + delivery : subtotal;
    // const totalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0);

    const elements = cartProducts.map(item => {
        const { id, ...itemProps } = item;
        return <CartListItem key={id} id={id} {...itemProps} />
    })

    const visibleContent = cartProducts.length > 0 ? elements :
        <>
            <div className="cart-list__empty">Your cart is empty</div>
            <div className="cart-list-item__divider"></div>
        </>

    return (
        <>
            <div className="container">
                <div className="cart-list__info">
                    <div className="cart-list__infos">{totalItems} item | {total.toFixed(2)}$</div>
                </div>
                <div className="cart-list-item__divider"></div>

                {visibleContent}

                <div className="cart-list__summary">
                    <div className="cart-list__summary__title">Summary</div>
                    <div className="cart-list__summary__subtotal">
                        <div className="cart-list__summary__subtotal__title">Subtotal</div>
                        <div className="cart-list__summary__subtotal__sum">{subtotal.toFixed(2)}$</div>
                    </div>
                    <div className="cart-list__summary__delivery">
                        <div className="cart-list__summary__delivery__title">Estimated Delivery & Handling</div>
                        <div className="cart-list__summary__delivery__sum">{visibleDelivery}</div>
                    </div>
                    <div className="cart-list__summary__total">
                        <div className="cart-list__summary__total__title">Total</div>
                        <div className="cart-list__summary__total__sum">{total.toFixed(2)}$</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList;