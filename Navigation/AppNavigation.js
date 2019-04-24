import React, { Component } from 'react'
import { createAppContainer, createDrawerNavigator, Header } from "react-navigation";
import HeaderComponent from '../Screen/Component/HeaderComponent';
import LoginContainer from '../Containers/LoginContainer';
import UserContainer from '../Containers/UserContainer';
import HomeNavigation from './HomeNavigation';

export default createAppContainer(createDrawerNavigator({
    Home : {
        screen : HomeNavigation,
        navigationOptions:{
            title: 'Home',
            header: HeaderComponent 
        }
    },
    Login : {
        screen : LoginContainer,
        navigationOptions:{
            title: 'Login',
            header: HeaderComponent 
        }
    },
    Profile : {
        screen : UserContainer,
        navigationOptions:{
            title: 'Profile',
            header: HeaderComponent 
        }
    }
}));