import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Comment extends React.Component {

  render() {
    let view = null;

    if (this.props.comments) {
      view = this.props.comments.map((item, index) =>
        <View style={styles.commentContainer} key={index}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {view}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  nickname: {
    color: '#444',
    fontWeight: 'bold',
    marginLeft: 5
  },
  comment: {
    color: '#555',
    marginLeft: 5
  }
});