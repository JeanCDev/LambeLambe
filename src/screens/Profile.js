import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Gravatar} from "react-native-gravatar";
import { connect } from "react-redux";
import { logout } from "../store/Actions/user";

class Profile extends React.Component {
  state = {
    photo: {},
    comment: '',
  }

  logOut = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Login');
  }

  render() {
    const options = {email: this.props.email, secure: true}

    return (
        <View style={styles.container}>
          <Gravatar options={options} style={styles.avatar}/>

          <Text style={styles.nickname}>{this.props.name}</Text>
          <Text style={styles.email}>{this.props.email}</Text>

          <TouchableOpacity style={styles.button} onPress={this.logOut}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginTop: 100
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25
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

const mapStateProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Profile);