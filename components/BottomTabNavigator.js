import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import createBottomTabNavigator libray -Challenge 1

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

//Add the createBottomTabNavigator to the variable called tab-Challenge 2
export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
      //Add the code to move to the respective screen when tab is clicked-challenge 3
         
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
