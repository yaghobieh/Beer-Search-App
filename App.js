import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchTabNavigator';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD85naWxswUVhvC7aIfdnqToP_7Zlot8Kw",
    authDomain: "bear-sea.firebaseapp.com",
    databaseURL: "https://bear-sea.firebaseio.com",
    projectId: "bear-sea",
    storageBucket: "",
    messagingSenderId: "249318588985"
};

firebase.initializeApp(firebaseConfig);

const App = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchTabNavigator: { screen: SearchTabNavigator }
}, {
  initialRouteName: 'HomeScreen'
});

export default App;
