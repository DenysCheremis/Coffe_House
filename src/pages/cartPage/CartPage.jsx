import Title from "../../components/title/Title"
import CartList from "../../components/cartList/CartList"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import './cartPage.scss'

const CartPage = () => {
    return (
        <section className="cart-page">
            <div>
                <Header />
                <Title
                    content="Your cart"
                    clazz="cart-page__header" />
                <CartList />
            </div>
            <Footer />
        </section>
    )
}

export default CartPage;