import fetch from 'cross-fetch'

/* =========
    ACTIONS 
============*/

// =================== IP adress 

const ipAdress = '192.168.0.10';

// =================== functions


// REGISTER USER

export const  REGISTER_USER = 'REGISTER_USER';

export const receiveNewUser = data =>({
    type: REGISTER_USER, payload: data
});
export function RegisterUser(username, email, password){
    return dispatch =>{
        let data = new FormData();
        data.append('username', username);
        data.append('email', email);
        data.append('password', password);

        console.log(data)
        return fetch ('http://'+ipAdress+':8000/newuser', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data'
        
            },
            // authorization: 'Bearer: ' + token
        })
        .then(response => response.json())
        .then(data => dispatch(receiveNewUser(data)))
        .catch(function (error) {
            console.log(error);
        });
    }

}

export function registerAndLoginUser(username, email, password){
    return dispatch => {
        dispatch(RegisterUser(username, email, password));
        dispatch(LoginUser(username, password));
    }
}

// LOGIN USER

export const  LOGIN_USER = 'LOGIN_USER';

export const receiveToken = data =>({
    type: LOGIN_USER, payload: data
});
export function LoginUser(name, password){
    console.log('passing')
    return dispatch =>{
        let data = new FormData();
        data.append('username', name);
        data.append('password', password);

        return fetch ('http://'+ipAdress+':8000/login_check', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            // authorization: 'Bearer: ' + token
        })
        .then(response => response.json())
        .then(data => dispatch(receiveToken(data.token)))
        .catch(function (error) {
            console.log(error);
        });
    }

}

// UNLOG USER

export const  UNLOG_USER = 'UNLOG_USER';

export const Unlog= () =>({
    type: UNLOG_USER
});

export function UnlogUser(){
    return Unlog()
}


// RANDOM IDEA
export const  RAND_IDEA = 'RAND_IDEA';

export const receiveIdea = data =>({
    type: RAND_IDEA, payload: data
});

export function randomIdea(){
    return dispatch =>{
        return fetch ('http://'+ipAdress+':8000/randomIdea', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => dispatch(receiveIdea(data)))
        .catch(function (error) {
            console.log(error);
        });
    }
}


// IDEA WITH ONE CATEGORY

export const  ONE_CAT_IDEA = 'ONE_CAT_IDEA';

export const receiveOneCategoryIdea = data =>({
    type: ONE_CAT_IDEA, payload: data
});


export function GetIdeasWithOneSpecification(id){
    return dispatch =>{
        return fetch ('http://'+ipAdress+':8000/specificIdea/'+id, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data =>dispatch(receiveOneCategoryIdea(data)))
        .catch(function (error) {
            console.log(error);
        });
    }
}

// ALL CATEGORIES
export const  CATEGORIES = 'CATEGORIES';

export const receiveCategories = data =>({
    type: CATEGORIES, payload: data
});

export function getAllCategories(){
    return dispatch =>{
        return fetch ('http://'+ipAdress+':8000/categories', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => dispatch(receiveCategories(data)))
        .catch(function (error) {
            console.log(error);
        });
    }
}


// ALL SUBCATEGORIES
export const  SUBCATEGORIES = 'SUBCATEGORIES';

export const receiveSubCategories = data =>({
    type: SUBCATEGORIES, payload: data
});

export function GetAllSubCategories(id){
    return dispatch =>{
        return fetch ('http://'+ipAdress+':8000/subcategory/'+id, {
            method: 'GET',
        })
        .then(response => response.json())
        
        .then(data => dispatch(receiveSubCategories(data)))
        .catch(function (error) {
            console.log(error);
        });
    }
}

// ALL SUBCATEGORIES
export const  TWOSPECIDEAS = 'TWOSPECIDEAS';

export const receiveTwoCategoriesIdeas = data =>({
    type: TWOSPECIDEAS, payload: data
});


export function GetIdeasWithTwoSpecification(cat, subcat){
    return dispatch =>{
        return fetch ('http://'+ipAdress+':8000/specificIdea/'+cat+'/'+subcat, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => dispatch(receiveTwoCategoriesIdeas(data)))
        .catch(function (error) {
            console.log(error);
        });
    }
}
