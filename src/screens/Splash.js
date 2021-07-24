import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Feed");
    }, 2000);
  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/img/icon.png')} />
        <Text style={styles.header}>Lambe-Lambe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});