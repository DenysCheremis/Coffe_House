import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cart from "../../icons/cart.svg"

import './header.scss'


const Header = () => {

    const totalItems = useSelector(state => state.cart.totalItems);

    return (
        <header className='header'>
            <div>
                <Link className="header__link" to="/">Coffee house</Link>
                <Link className="header__link" to="/our-coffee">Our coffee</Link>
                <Link className="header__link" to="/for-your-pleasure">For your pleasure</Link>
            </div>
            <Link className="cart" to="/your-cart">
                <img className='cart__img' src={cart} alt="cart" />
                <div className='cart__counter'>{totalItems}</div>
            </Link>
        </header>
    )
}

export default Header;