import React, { Component } from 'react'
import { createAppContainer, createDrawerNavigator, Header } from "react-navigation";
import HeaderComponent from '../Screen/Component/HeaderComponent';
import LoginContainer from '../Containers/LoginContainer';
import UserNavigation from "./UserNavigation";
import HomeNavigation from './HomeNavigation';
import DrawerContainer from "../Containers/DrawerContainer";
import RegisterContainer from "../Containers/RegisterContainer";




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
    Register : {
        screen : RegisterContainer,
        navigationOptions:{
            title: 'Register',
            header: HeaderComponent 
        }
    },
    Profile : {
        screen : UserNavigation,
        navigationOptions:{
            title: 'Profile',
            header: HeaderComponent 
        }
    }
}, {
    contentComponent : DrawerContainer  
}));