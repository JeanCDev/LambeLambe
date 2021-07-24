import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { connect } from "react-redux";
import { createUser } from "../store/Actions/user";

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  register = async () => {
    await this.props.onCreateUser(this.state);

    this.setState({
      name: '',
      email: '',
      password: ''
    });

    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            autoFocus
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />

          <TextInput
            placeholder="Email"
            style={styles.input}
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

          <TouchableOpacity
            style={styles.button}
            onPress={this.register}>
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

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Register);