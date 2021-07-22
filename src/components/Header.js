import React from 'react';
import { StyleSheet, Text, View, Platform, Image} from 'react-native';
import { connect } from 'react-redux';
import { Gravatar } from 'react-native-gravatar';
import Icon from '../../assets/img/icon.png';

class Header extends React.Component {

  render() {

    const name = this.props.name || 'Anonymous';
    const avatar = this.props.email ?
      <Gravatar options={{email: this.props.email, secure: true}}  style={styles.avatar}/> : null;

    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={Icon} style={styles.image}/>
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>

        <View style={styles.userContainer}>
          <Text style={styles.userName}>{name}</Text>
          {avatar}
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    fontSize: 10,
    color: '#888'
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 30
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

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name
  }
}

export default connect(mapStateToProps, null)(Header);