import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gravatar} from 'react-native-gravatar';

export default function Author(props) {
  return (
    <View style={styles.container}>
      <Gravatar options={{ email: props.email, secure: true}} style={styles.avatar}/>

      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginHorizontal: 15
  },
  nickname: {
    color: '#444',
    fontSize: 15,
    fontWeight: 'bold'
  }
});