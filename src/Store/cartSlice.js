import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartItems: []

    },
    reducers: {
        inistialData: (state, action) => {

            state.items = action.payload
        },
        addtoCart: (state, action) => {
            state.cartItems = action.payload

        },
        removeItem: (state, action) => {
            state.cartItems = action.payload

        },
        clearCart: (state, action) => {
            state.cartItems.length = 0
        }
    }
});
export const { inistialData, removeItem, addtoCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer