import { Link } from 'react-router-dom';

import "./homeBestItem.scss";

const HomeBestItem = ({ img, name, price, id }) => {
    return (
        <Link to={`/products/${id}`} className="best__item">
            <img src={img} alt="coffe" className="best__item__img" />
            <div>
                <div className="best__item__title">{name}</div>
                <div className="best__item__price">{`${price}$`}</div>
            </div>
        </Link>
    )
}

export default HomeBestItem;