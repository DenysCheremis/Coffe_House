import { Link, Outlet } from 'react-router-dom';
import coffeeBeansIconBlack from "../../icons/coffee-beans-title-black.svg"

import './layout.scss';

const Layout = () => {
    return(
        <>
            <header className='header'>
                <Link className="header__link" to="/">Coffee house</Link>
                <Link className="header__link" to="/our-coffee">Our coffee</Link>
                <Link className="header__link" to="/for-your-pleasure">For your pleasure</Link>
            </header>

            <Outlet/>

            <footer className='footer'>
                <Link className="footer__link" to="/">Coffee house</Link>
                <Link className="footer__link" to="/our-coffee">Our coffee</Link>
                <Link className="footer__link" to="/for-your-pleasure">For your pleasure</Link>
                <div className="about__wrapper">
                    <div className="about__divider"></div>
                    <img src={coffeeBeansIconBlack} alt="" className="about__coffe-beans"/>
                    <div className="about__divider"></div>
                </div>
            </footer>
        </>
    )
}

export default Layout;