import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    playerName : 'Player'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})


export default cartSlice.reducer;