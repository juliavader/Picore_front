import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { REGISTER_USER, LOGIN_USER, UNLOG_USER , RAND_IDEA, CATEGORIES, ONE_CAT_IDEA, SUBCATEGORIES, TWOSPECIDEAS} from './actions';
import jwt from 'jwt-decode';
import {LoginUser} from './actions'


// ===============
// USER REDUCER 
// ===============
const InitialStateUser = {
    credit: 0,
    name: undefined,
    password: undefined,
    UserToken: undefined,
    email : undefined,
    
}

function user(state = InitialStateUser, action){
    switch(action.type){
        case LOGIN_USER :
            var UserToken = {...state, UserToken : action.payload}
            if(UserToken.UserToken != undefined){
                var decoded = jwt(UserToken.UserToken);
                return {...state, email : decoded.email , UserToken: UserToken.UserToken, credit : decoded.credit, name : decoded.username }
            } 
        case UNLOG_USER : 
            return {...state, UserToken : undefined, email : undefined, credit : 0, name : undefined}
        default:
            return state;
    }
}

// ===============
// IDEA REDUCER 
// ===============

const InitialStateIdea = {
    randomIdea : undefined, 
    categories : undefined,
    subcategories : undefined,
    selectedCat : undefined, 
    specificIdea : undefined, 
    twospecificIdea : undefined
}
function Idea(state = InitialStateIdea, action){
    switch(action.type){
        case RAND_IDEA :
            return {...state, randomIdea : action.payload }
        case ONE_CAT_IDEA :
            return{...state, specificIdea : action.payload}
        case CATEGORIES :
            return {...state, categories : action.payload}
        case SUBCATEGORIES :
            subcategories = {...state ,subcategories : action.payload}
            if(subcategories.subcategories != []){
                return subcategories
            }
            return {...state , subcategories : action.payload}
        case TWOSPECIDEAS :
            return {...state, twospecificIdea : action.payload}
        default:
            return state;
    }
}


const app = combineReducers({ user, Idea});

export default createStore(app, applyMiddleware(thunk));