import HomeBestItem from "../home-best-item/home-best-item";
import "./home-best.scss";

const HomeBest = ({products}) => {

    const elements = products.map(item => {
        const{id, ...itemProps} = item;
        return <HomeBestItem key={id} {...itemProps}/>
    })

    return(
        <section className="best">
            <div className="container">
                <div className="title">Our best</div>
                <div className="best__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default HomeBest;