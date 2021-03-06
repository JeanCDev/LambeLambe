import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import { connect } from "react-redux";
import { fetchPosts } from '../store/Actions/posts';

class Feed extends React.Component {

  componentDidMount = () => {
    this.props.onFetchPosts();
  }

  render() {

    return (
      <View style={styles.container}>
        <Header />

        <FlatList
          data={this.props.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
});

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Feed);