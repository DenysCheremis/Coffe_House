import "./home-best-item.scss";

const HomeBestItem = ({img, name, price}) => {
    return(
        <div className="best__item">
            <img src={img} alt="coffe" className="best__item__img"/>
            <div className="best__item__title">{name}</div>
            <div className="best__item__price">{`${price}$`}</div>
        </div>
    )
}

export default HomeBestItem;