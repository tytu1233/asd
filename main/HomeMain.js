import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator()
function HomeMain({route}) {
  let emaila = route.params.emaila;
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name={JSON.stringify(emaila)} component={HomeScreen}
          initialParams={{emaila: emaila}}/>
        </Drawer.Navigator>
    )
}

function HomeScreen({route}) {
  let emaila = route.params.emaila;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text style={styles.title}>{`Details (from ${emaila})`}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
}
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    displayText: {
        color: 'rgb(255, 117, 0)',
        fontSize: 15,
        fontFamily: "Cochin"
      },
});

export default HomeMain;