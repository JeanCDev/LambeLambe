import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { connect } from "react-redux";
import { login } from "../store/Actions/user";

class Login extends React.Component {
  state = {
    name: "Jean Carlos",
    email: '',
    password: ''
  }

  logIn = () => {
    this.props.onLogin({ ...this.state });
    this.props.navigation.navigate('Profile');
  }

  signIn = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            autoFocus
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />

          <TouchableOpacity style={styles.button} onPress={this.logIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: "#333"
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);