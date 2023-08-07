import React, { Component } from 'react';
import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.scss';



class CoffeeList extends Component {

    render(){
        const {products} = this.props;

        const elements = products.map(item => {
            const{id, ...itemProps} = item;
            return <CoffeeListItem key={id} id={id} {...itemProps}/>
        })

        return(
            <section className='coffee-list'>
                <div className='container'>
                    <div className='coffee-list__wrapper'>
                        {elements}
                    </div>
                </div>
            </section>
        )
    }
}

export default CoffeeList;