import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import { connect } from "react-redux";

class Feed extends React.Component {

  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Jean',
      email: 'jean@gamil.com',
      image: require('../../assets/img/gate.jpg'),
      comments: [{nickname: 'John Doe', comment: "Loko"}, {nickname: 'John Doe', comment: "Loko"}]
    },{
      id: Math.random(),
      nickname: 'Pedro',
      email: 'jean@gamil.com',
      image: require('../../assets/img/fence.jpg'),
      comments: [{nickname: 'John Doe', comment: "Loko"}]
    }]
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

export default connect(mapStateToProps, null)(Feed);