import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";

export default class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  signUp = () => {
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

          <TextInput
            placeholder="Confirme a senha"
            style={styles.input}
            secureTextEntry
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({confirmPassword})}
          />

          <TouchableOpacity style={styles.button} onPress={this.signUp}>
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