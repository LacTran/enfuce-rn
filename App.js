import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import QuestionaireScreen from './src/screens/QuestionaireScreen';
import LifestyleScreen from './src/screens/LifestyleScreen';
import MainScreen from './src/screens/MainScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import TransactionDetailScreen from './src/screens/TransactionDetailScreen';
import CategoryDetailScreen from './src/screens/CategoryDetailScreen';
import TipsScreen from './src/screens/TipsScreen';
import TipDetailScreen from './src/screens/TipDetailScreen';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen
    }),
    Welcome: WelcomeScreen,
    Question: QuestionaireScreen,
    Lifestyle: LifestyleScreen,
    mainFlow: createStackNavigator({
        Main: MainScreen,
        Profile: ProfileScreen,
        TransactionDetail: TransactionDetailScreen,
        CategoryDetail: CategoryDetailScreen,
        Tips: TipsScreen,
        TipDetail: TipDetailScreen
    })
})

export default createAppContainer(switchNavigator)