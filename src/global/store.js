import { createStore } from "redux";

const { creatStore } = window.Redux;

const initialState = ['Recently', 'Hot', 'Popular'];

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

function lstCategory(catLst) {
    if(Array.isArray(catLst) || catLst.length === 0) return;
    const ulElement = doc
}