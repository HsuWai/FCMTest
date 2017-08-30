
import React, { Component } from 'react';
import { Provider } from "react-redux";
import { AppRegistry, View } from 'react-native';
import {  StackNavigator } from "react-navigation";
import store from "./store";
import LoginScreen from './src/LoginScreen'
import SignupScreen from './src/SignupScreen'
import InterestScreen from './src/InterestScreen'
import TermsConditionsScreen from './src/TermsConditionsScreen'
import TestScreen from './src/TestScreen'
import PushNotification from './src/PushNotification'
import Home from './src/Home'



AppRegistry.registerComponent('FCMTest', () => Home);
