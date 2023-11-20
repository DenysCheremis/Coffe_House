import { Link } from 'react-router-dom';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';

import "./homeBestItem.scss";

const HomeBestItem = ({ img, name, price, id, country }) => {

    const product = { img, name, price, id, country };

    return (
        <Link to={`/products/${id}`} className="best__item">
            <img src={img} alt="coffe" className="best__item__img" />
            <div>
                <div className="best__item__title">{name}</div>
                <div className='best__item__wrapper'>
                    <ButtonAddToCart product={product} />
                    <div className="best__item__price">{`${price}$`}</div>
                </div>
            </div>
        </Link>
    )
}

export default HomeBestItem;