import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestCoffee } from "../coffeeList/coffeeSlice";

import HomeBestItem from "../homeBestItem/HomeBestItem";
import Spinner from "../spinner/Spinner";

import "./homeBest.scss";

const HomeBest = () => {

    const dispatch = useDispatch();
    const bestCoffee = useSelector(state => state.coffee.bestCoffee)
    const bestCoffeeLoadingStatus = useSelector(state => state.coffee.bestCoffeeLoadingStatus);

    useEffect(() => {
        dispatch(fetchBestCoffee());
    }, []);


    const renderBestCoffee = (arr) => {
        return arr.map(({ id, ...props }) => {
            return (
                <HomeBestItem key={id} id={id} {...props} />
            )
        })
    }

    const elements = bestCoffeeLoadingStatus === 'loading' ? <Spinner /> : renderBestCoffee(bestCoffee);

    return (
        <section className="best">
            <div className="container">
                <div className="title title_mb40">Our best</div>
                <div className="best__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default HomeBest;