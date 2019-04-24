import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { LOGIN_USER, UNLOG_USER , RAND_IDEA, CATEGORIES, ONE_CAT_IDEA} from './actions';
import jwt from 'jwt-decode';


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
                console.log(decoded)
                return {...state, email : decoded.email , UserToken: UserToken.UserToken, credit : decoded.credit, name : decoded.username, username : undefined, password: undefined }
            } 
        case UNLOG_USER : 
            return {...state, UserToken : undefined, email : undefined, credit : 0, name : undefined};
        
        
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
    selectedCat : undefined, 
    specificIdea : undefined
}
function Idea(state = InitialStateIdea, action){
    switch(action.type){
        case RAND_IDEA :
            return {...state, randomIdea : action.payload }
        case ONE_CAT_IDEA :
            return{...state, specificIdea : action.payload}
        case CATEGORIES :
            return {...state, categories : action.payload}

        default:
            return state;
    }
}


const app = combineReducers({ user, Idea});

export default createStore(app, applyMiddleware(thunk));