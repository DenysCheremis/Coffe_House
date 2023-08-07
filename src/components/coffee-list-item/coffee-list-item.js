import "./coffee-list-item.scss";

const CoffeeListItem = ({img, name, country, price}) => {
    return(
        <div className="coffee-list__item">
            <img src={img} alt="coffe" className="coffee-list__item__img"/>
            <div className="coffee-list__item__title">{name}</div>
            <div className="coffee-list__item__country">{country}</div>
            <div className="coffee-list__item__price">{`${price}$`}</div>
        </div>
    )
}

export default CoffeeListItem;