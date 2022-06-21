import { createSlice } from "@reduxjs/toolkit";

const c = false ;


const initialState = {
    stateBtn : false,
    nb :  4,
    parts : []
}

const ngSlice = createSlice({
    name: 'ng',
    initialState,
    reducers:{
        choClicked : (state,{payload}) => {
            state.nb -= 1;
            const p = { name : payload.name , state: true};
            state.parts.push(p);
        },
        canClicked : (state) => {
            state.nb = 4;
            state.parts = [];
        }
    }
})

export const { choClicked,canClicked } = ngSlice.actions;
export default ngSlice.reducer;