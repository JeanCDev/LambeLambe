import React from 'react';
import { StyleSheet, Text, View, Platform, Image} from 'react-native';
import Icon from '../../assets/img/icon.png';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={Icon} style={styles.image}/>
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    width: '100%'
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: "#000",
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  }
});