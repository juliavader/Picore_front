import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from "react-redux";
import app from "./redux/reducers";
import AppNavigation from './Navigation/AppNavigation';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fontloaded : false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'GrandHotel-Regular': require('./assets/fonts/GrandHotel-Regular.ttf'),
      'OpenSans-Regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({fontloaded : true})
  }

  render() {

    if (!this.state.fontloaded) {
      return null;
    }

    return (
      <Provider store = {app}>
        <AppNavigation/>
      </Provider> 
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
