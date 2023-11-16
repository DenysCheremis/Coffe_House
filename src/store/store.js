import { configureStore } from '@reduxjs/toolkit';
import coffee from '../components/coffeeList/coffeeSlice';
import cart from '../pages/cartPage/cartSlice';


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: { coffee, cart },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;