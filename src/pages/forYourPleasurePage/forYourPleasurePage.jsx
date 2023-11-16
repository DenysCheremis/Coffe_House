import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../components/coffeeList/coffeeSlice';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Title from "../../components/title/Title";
import PleasureAbout from "../../components/pleasureAbout/PleasureAbout";
import CoffeeList from '../../components/coffeeList/CoffeeList';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ForYourPleasurePage = () => {

    const dispatch = useDispatch();
    const coffee = useSelector(state => state.coffee.coffee)

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <>
            <Helmet>
                <meta name="description" content="For your pleasure" />
                <title>For your pleasure</title>
            </Helmet>
            <Header />
            <Title
                content="For your pleasure"
                clazz="coffee_pleasure" />
            <PleasureAbout />
            <CoffeeList products={coffee} />
            <Footer />
        </>
    )
}

export default ForYourPleasurePage;