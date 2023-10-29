import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../components/coffeeList/coffeeSlice';
import { useEffect } from 'react';

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
            <Title
                content="For your pleasure"
                clazz="coffee_pleasure" />
            <PleasureAbout />
            <CoffeeList products={coffee} />
        </>
    )
}

export default ForYourPleasure;