import { createStore } from "redux";

import reducer from './reducers/Index.js';

const Store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSIONS__&&window.__REDUX_DEVTOOLS_EXTENSIONS__());

export default Store;