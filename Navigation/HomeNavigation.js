import React, { Component } from 'react'
import HeaderComponent from '../Screen/Component/HeaderComponent';
import HomeContainer from '../Containers/HomeContainer';
import DetailsContainer from '../Containers/DetailsContainer';
import SortContainer from '../Containers/SortContainer';
import { createAppContainer, createStackNavigator} from "react-navigation";

export default createAppContainer(createStackNavigator({
        Home : {
            screen : HomeContainer,
            navigationOptions:{
                title: 'Home',
                header: HeaderComponent 
            }
        },
        Details: {
            screen : DetailsContainer,
            navigationOptions:{
                title: 'Details',
                header: HeaderComponent 
            }
        },
        Sort: {
            screen : SortContainer,
            navigationOptions:{
                title: 'Sort',
                header: HeaderComponent 
            }
        }
    })
); 