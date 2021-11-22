import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
  };


  login = (email) => {
    this.props.navigation.navigate('Home', {
    emaila: email});
  };

  render() {
    return (
      <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          onChangeText={(value) => this.setState({email: value})}
          placeholderTextColor= 'rgb(255, 117, 0)'
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}
      onPress={() => this.login(this.state.email)
      }>
        <Text style={styles.loginText}>Logowanie</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "rgb(31, 36, 42)",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 3,
    borderLeftColor:  "rgb(255, 117, 0)",
    borderRightColor:  "rgb(255, 117, 0)",
    borderTopColor:  "rgb(255, 117, 0)",
    borderBottomColor:  "rgb(255, 117, 0)"
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'rgb(255, 117, 0)'
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: 'rgb(255, 117, 0)',
  },

  RegisterBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: 'rgb(255, 117, 0)',
  },
});