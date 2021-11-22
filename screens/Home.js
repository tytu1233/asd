import React, { Component } from 'react'
import {Button, StyleSheet, View, Text} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from '../main/Search';
import HomeMain from '../main/HomeMain';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Tab = createMaterialBottomTabNavigator();

export default class Home extends Component {
  
  render() {
    const { params } = this.props.navigation.state;
    const emaila = params ? params.emaila : null;
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={JSON.stringify(emaila)} component={HomeMain}
          initialParams={{emaila: emaila}}
          options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
              }}/>
          <Tab.Screen name="Search" component={Search} options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 130,
  },
  reward: {
    marginVertical: 20,
    width: 200,
  },
  business: {
    marginVertical: 20,
    width: 200,
  },
  govt: {
    marginVertical: 20,
    width: 200,
  },
  name: {
    fontSize: 30,
    justifyContent: 'center',
  },
});