import { createSlice } from "@reduxjs/toolkit";

const cartItems = [
    {id:"1", name:'Player 1'},
    {id:"2", name:'Player 2'},
    {id:"3", name:'Player 3'},
    {id:"4", name:'Player 4'}
  ]

const initialState = {
    cartItems : cartItems
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        changeName : (state,{payload}) => {
            const newName =  payload.pn ;
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.name = newName;
        }
    }
})

export const { changeName } = cartSlice.actions;
export default cartSlice.reducer;