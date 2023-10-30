import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    coffee: [],
    bestCoffee: [],
    coffeeLoadingStatus: 'idle',
    bestCoffeeLoadingStatus: 'idle',
    btnContent: 'Load more'
};

export const fetchCoffee = createAsyncThunk(
    'coffee/fetchCoffee',
    async () => {
        const { request } = useHttp();
        return await request("http://localhost:3001/products");
    }
)

export const fetchBestCoffee = createAsyncThunk(
    'bestCoffee/fetchBestCoffee',
    async () => {
        const { request } = useHttp();
        return await request("http://localhost:3001/productsBest");
    }
)

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        setBtnContentToAllProducts: (state) => { state.btnContent = 'These are all products' },
        setBtnContentToLoadMore: (state) => { state.btnContent = 'Load More' }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffee.pending, state => { state.coffeeLoadingStatus = 'loading' })
            .addCase(fetchCoffee.fulfilled, (state, action) => {
                state.coffeeLoadingStatus = 'idle';
                state.coffee = action.payload;
            })
            .addCase(fetchCoffee.rejected, state => { state.coffeeLoadingStatus = 'error' })

        builder
            .addCase(fetchBestCoffee.pending, state => { state.bestCoffeeLoadingStatus = 'loading' })
            .addCase(fetchBestCoffee.fulfilled, (state, action) => {
                state.bestCoffeeLoadingStatus = 'idle';
                state.bestCoffee = action.payload;
            })
            .addCase(fetchBestCoffee.rejected, state => { state.bestCoffeeLoadingStatus = 'error' })

        builder.addDefaultCase(() => { })
    }
});

const { reducer, actions } = coffeeSlice;

export default reducer;
export const { setBtnContentToAllProducts, setBtnContentToLoadMore } = actions;