import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../components/coffeeList/coffeeSlice';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Title from "../../components/title/Title";
import PleasureAbout from "../../components/pleasureAbout/PleasureAbout";
import CoffeeList from '../../components/coffeeList/CoffeeList';

const ForYourPleasure = () => {

    const dispatch = useDispatch();
    const coffee = useSelector(state => state.coffee.coffee)

    useEffect(() => {
        dispatch(fetchCoffee());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Helmet>
                <meta name="description" content="For your pleasure" />
                <title>For your pleasure</title>
            </Helmet>
            <Title
                content="For your pleasure"
                clazz="coffee_pleasure" />
            <PleasureAbout />
            <CoffeeList products={coffee} />
        </>
    )
}

export default ForYourPleasure;