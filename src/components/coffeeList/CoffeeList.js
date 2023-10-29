import { useSelector } from 'react-redux';

import CoffeeListItem from '../coffeeListItem/CoffeeListItem';
import Spinner from '../spinner/Spinner';

import './coffeeList.scss';

const CoffeeList = ({ products }) => {

    const coffeeLoadingStatus = useSelector(state => state.coffee.coffeeLoadingStatus)

    // const elements = products.map(item => {
    //     const { id, ...itemProps } = item;
    //     return <CoffeeListItem key={id} id={id} {...itemProps} />
    // })

    const elements = coffeeLoadingStatus === 'loading' ?
        <Spinner /> :
        products.map(item => {
            const { id, ...itemProps } = item;
            return <CoffeeListItem key={id} id={id} {...itemProps} />
        })

    return (
        <section className='coffee-list'>
            <div className='container'>
                <div className='coffee-list__wrapper'>
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default CoffeeList;