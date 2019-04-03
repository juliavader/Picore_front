import { combineReducers, createStore } from 'redux';
import { INCREASE_COUNTER, DECREASE_COUNTER } from './actions';

const InitialState = {
    counter: 0 
}

function counter(state = InitialState, action){
    switch(action.type){
        case INCREASE_COUNTER:
            return {...state, counter: state.counter + 1};
        case DECREASE_COUNTER:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}

const app = combineReducers({ counter });

export default createStore(app);