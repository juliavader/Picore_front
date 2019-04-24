import fetch from 'cross-fetch'

/* =========
    ACTIONS 
============*/

// =================== IP adress 

const ipAdress = '192.168.43.20';

// =================== functions

// LOGIN USER

export const  LOGIN_USER = 'LOGIN_USER';

export const receiveToken = data =>({
    type: LOGIN_USER, payload: data
});
export function LoginUser(name, password){
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