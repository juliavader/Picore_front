import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LOGIN_USER, 
    UNLOG_USER ,
    RAND_IDEA, 
    CATEGORIES, 
    ONE_CAT_IDEA, 
    SUBCATEGORIES, 
    TWOSPECIDEAS, 
    ADDFAVORITESIDEA, 
    FAVORITES_IDEA_BY_USER, 
    DELETE_SPEC, 
    TWO_CATEGORIES } from './actions';
import jwt from 'jwt-decode';
import {LoginUser} from './actions'


// ===============
// USER REDUCER 
// ===============
const InitialStateUser = {
    credit: 0,
    userId: undefined,
    name: undefined,
    UserToken: undefined,
    email : undefined,
    addFavorite : undefined, 
    favorites : undefined,
    disabled : false
    
}

function user(state = InitialStateUser, action){
    switch(action.type){
        case LOGIN_USER :
            var UserToken = {...state, UserToken : action.payload}
            if(UserToken.UserToken != undefined){
                var decoded = jwt(UserToken.UserToken);
                return {...state, email : decoded.email , UserToken: UserToken.UserToken, credit : decoded.credit, name : decoded.username, userId: decoded.userId}
            } 
        case UNLOG_USER : 
            return {...state, UserToken : undefined, email : undefined, credit : 0, name : undefined, userId : undefined,favorites : undefined }
        case ADDFAVORITESIDEA:
            return {...state, addFavorite : true}
        case FAVORITES_IDEA_BY_USER:
            return {...state, favorites : action.payload, disabled :false }
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
            return{...state, specificIdea : action.payload, selectedCat : action.payload.c_id}
        case TWO_CATEGORIES:
            console.log(action.payload);
            
            // action.payload.map(catId=>{
            //     return {...state, selectedCat :[catId]}
            // })
        case CATEGORIES :
            return {...state, categories : action.payload}
        case SUBCATEGORIES :
            subcategories = {...state ,subcategories : action.payload}
            if(subcategories.subcategories != []){
                return subcategories
            }
            return {...state , subcategories : action.payload}
        case TWOSPECIDEAS :
            return {...state, twospecificIdea :action.payload }
        case DELETE_SPEC : 
        console.log('passing 1 ')
            return {...state, twospecificIdea : undefined, specificIdea : undefined }
        default:
            return state;
    }
}


const app = combineReducers({ user, Idea});

export default createStore(app, applyMiddleware(thunk));