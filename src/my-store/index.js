import {createStore} from '../my-redux';
import {counterReducer} from '../store/counter';

const store = createStore(counterReducer);

export default store;
