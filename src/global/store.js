import { createStore } from "redux";

const initialState = ['Recently', 'Hot', 'Popular'];

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export function lstData(){
    return store.getState();
}
