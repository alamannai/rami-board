import { createSlice } from "@reduxjs/toolkit";

const cartItems = [
    {id:"1", name:'Player 1', score: 0},
    {id:"2", name:'Player 2', score: 0},
    {id:"3", name:'Player 3', score: 0},
    {id:"4", name:'Player 4', score: 0}
  ]

const initialState = {
    cartItems : cartItems
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        changeName : (state,{payload}) => {
            const newName =  payload.playerName ;
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.name = newName;
        },
        addClicked : (state,{payload}) => {
            const addedScore =  parseInt(payload.score) ;
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.score += addedScore;
        },
        subClicked : (state,{payload}) => {
            const subedScore =  parseInt(payload.score) ;
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.score -= subedScore;
        }
    }
})

export const { changeName,addClicked,subClicked } = cartSlice.actions;
export default cartSlice.reducer;