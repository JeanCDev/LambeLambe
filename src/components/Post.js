import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import AddComment from './AddComment';
import Author from './Author';
import Comment from './Comment';
import {connect} from 'react-redux';

class Post extends React.Component {
  render() {

    const addComment = this.props.name
      ? <AddComment postId={this.props.id} /> : null;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.image} />

        <Author nickname={this.props.nickname} email={this.props.email} />
        <Comment comments={this.props.comments}/>

        {addComment}
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

const mapStateToProps = ({user}) => {
  return {
    name: user.name
  }
}

export default connect(mapStateToProps)(Post);