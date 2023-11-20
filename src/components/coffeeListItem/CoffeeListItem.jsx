import { Link } from 'react-router-dom';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';

import "./coffeeListItem.scss";

const CoffeeListItem = ({ img, name, country, price, id }) => {

    const product = { img, name, price, id, country };

    return (
        <Link to={`/products/${id}`} className="coffee-list__item">
            <img src={img} alt="coffe" className="coffee-list__item__img" />
            <div className="coffee-list__item__title">{name}</div>
            <div className="coffee-list__item__country">{country}</div>
            <div className='coffee-list__item__wrapper'>
                <ButtonAddToCart product={product} />
                <div className="coffee-list__item__price">{`${price}$`}</div>
            </div>

        </Link>
    )
}

export default CoffeeListItem;