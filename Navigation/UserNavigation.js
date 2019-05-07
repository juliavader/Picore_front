import React, { Component } from 'react'
import HeaderComponent from '../Screen/Component/HeaderComponent';
import UserContainer from '../Containers/UserContainer';
import FavoriteContainer from '../Containers/FavoriteContainer';
import DetailsFavoriteContainer from '../Containers/DetailsFavoriteContainer';
import AddIdeaContainer from '../Containers/AddIdeaContainer';

import { createAppContainer, createStackNavigator} from "react-navigation";

export default createAppContainer(createStackNavigator({
        Profile : {
            screen : UserContainer,
            navigationOptions:{
                title: 'Profile',
                header: HeaderComponent 
            }
        },
        Favorites: {
            screen : FavoriteContainer,
            navigationOptions:{
                title: 'Favorites',
                header: HeaderComponent 
            }
        },
        DetailsFavorite: {
            screen : DetailsFavoriteContainer,
            navigationOptions:{
                title: 'DetailsFavorite',
                header: HeaderComponent 
            }
        },
        AddIdea: {
            screen : AddIdeaContainer,
            navigationOptions:{
                title: 'AddIdea',
                header: HeaderComponent 
            }
        }
    })
); 