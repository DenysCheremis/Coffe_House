import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../../components/coffeeList/coffeeSlice';
import { Helmet } from 'react-helmet';


import Title from '../../components/title/Title';
import CoffeeAbout from '../../components/coffeeAbout/CoffeeAbout';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import Filter from '../../components/filter/Filter';
import CoffeeList from '../../components/coffeeList/CoffeeList';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import './ourCoffePage.scss';

const OurCoffePage = () => {
    const [filter, setFilter] = useState("");
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const coffee = useSelector(state => state.coffee.coffee)

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        const regex = new RegExp(term, "i");

        return items.filter(item => {
            return regex.test(item.name);
        });
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const filterCoffee = (items, filter) => {
        switch (filter) {
            case "Brazil":
                return items.filter(item => item.country === "Brazil");
            case "Kenya":
                return items.filter(item => item.country === "Kenya");
            case "Columbia":
                return items.filter(item => item.country === "Columbia");
            default:
                return items;
        }
    }

    const visibleProducts = searchCoffee(filterCoffee(coffee, filter), term);

    return (
        <>
            <Helmet>
                <meta name="description" content="Our Coffee" />
                <title>Our Coffee</title>
            </Helmet>
            <Header />
            <Title
                content="Our Coffee"
                clazz="coffee" />
            <CoffeeAbout />
            <section className='search-panel'>
                <SearchPanel
                    onUpdateSearch={onUpdateSearch} />
                <Filter
                    onFilterSelect={onFilterSelect}
                    filter={filter} />
            </section>
            <CoffeeList products={visibleProducts} />
            <Footer />
        </>
    )

}

export default OurCoffePage;