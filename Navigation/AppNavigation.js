import React, { Component } from 'react'
import { createAppContainer, createDrawerNavigator, Header } from "react-navigation";
import LoginApp from "../Screen/LoginApp";
import HomeApp from '../Screen/HomeApp';
import HeaderComponent from '../Screen/Component/HeaderComponent';

export default createAppContainer(createDrawerNavigator({
    Home : {
        screen : HomeApp,
        navigationOptions:{
            title: 'Home',
            header: HeaderComponent 
        }
    },
    Login : {
        screen : LoginApp,
        navigationOptions:{
            title: 'Login',
            header: HeaderComponent 
        }
    }
}));