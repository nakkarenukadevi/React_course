import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []

    },
    reducers: {
        inistialData: (state, action) => {

        },
        removeItem: (state, action) => {

        }
    }
});
export const { inistialData, removeItem } = cartSlice.actions;
export default cartSlice.reducer