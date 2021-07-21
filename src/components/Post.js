import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import AddComment from './AddComment';
import Author from './Author';
import Comment from './Comment';

export default class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.image} />

        <Author nickname={this.props.nickname} email={this.props.email} />
        <Comment comments={this.props.comments}/>

        <AddComment />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3/4,
    resizeMode: 'contain',
  }
});