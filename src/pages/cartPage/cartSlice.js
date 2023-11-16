import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    subtotal: 0,
    delivery: 4.99,
    totalItems: 0
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartProducts.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                newItem.quantity = 1;
                state.cartProducts.push(newItem);
            }
            state.subtotal = state.cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload);
            state.subtotal = state.cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeOneItemFromCart: (state, action) => {
            const removeItem = action.payload;
            const existingItem = state.cartProducts.find(item => item.id === removeItem.id);

            existingItem.quantity -= 1;

            state.subtotal = state.cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
        },
        updateTotalItems: state => {
            state.totalItems = state.cartProducts.reduce((acc, item) => acc + item.quantity, 0);
        },
    }
});

const { reducer, actions } = cartSlice;

export default reducer;
export const { addToCart, removeFromCart, updateSubtotal, updateTotalItems, removeOneItemFromCart } = actions;