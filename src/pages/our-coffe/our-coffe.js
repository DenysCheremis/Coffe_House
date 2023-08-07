import { Component } from 'react';

import Title from '../../components/title/title';
import CoffeeAbout from '../../components/coffee-about/coffee-about';
import SearchPanel from '../../components/search-panel/search-panel';
import Filter from '../../components/filter/filter';
import CoffeeList from '../../components/coffee-list/coffee-list';

import './our-coffe.scss';

class OurCoffe extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            filter: "",
            term: ""
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchCoffee = (items, term) => {
        if(term.length === 0){
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    filterCoffee = (items, filter) => {
        switch(filter) {
            case "Brazil":
                return items.filter(item => item.country === "Brazil");
            case "Kenya":
                return items.filter(item => item.country === "Kenya");
            case "Columbia":
                return items.filter(item => item.country === "Columbia");
            default:
                return items
        }
    }

    render() {
        const {products, filter, term} = this.state;
        const visibleProducts = this.searchCoffee(this.filterCoffee(products, filter), term);

        return(
            <>
                <Title 
                    content="Our Coffee"
                    clazz="coffee"/>
                <CoffeeAbout/>
                <section className='search-panel'>
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}/>
                        <Filter
                            onFilterSelect={this.onFilterSelect}
                            filter={filter}/>
                </section>
                <CoffeeList products={visibleProducts}/>
            </>
        )
    }
}

export default OurCoffe;