import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from "react-redux";
import app from "./redux/reducers";
import AppNavigation from './Navigation/AppNavigation';



export default class App extends React.Component {

  render() {
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
