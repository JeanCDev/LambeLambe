import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Feed from "./screens/Feed";
import AddPicture from "./screens/AddPicture";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Splash from "./screens/Splash";

const loginOrProfile = createSwitchNavigator({
  Profile: Profile,
  Login: Login,
  Register: Register
}, {
  initialRouteName: "Login"
});

const MenuRoutes = {
  Feed: {
    name: "Feed",
    screen: Feed,
    navigationOptions: {
      title: "Feed",
      tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor}/>
    }
  },
  Add: {
    name: "AddPhoto",
    screen: AddPicture,
    navigationOptions: {
      title: "Add picture",
      tabBarIcon: ({tintColor}) => <Icon name="camera" size={30} color={tintColor}/>
    }
  },
  Profile: {
    name: "Profile",
    screen: loginOrProfile,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({tintColor}) => <Icon name="user" size={30} color={tintColor}/>
    }
  }
}

const MenuConfig = {
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false,
  }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

const SplashRouter = createSwitchNavigator({
  Splash: Splash,
  App: MenuNavigator
}, {initialRouteName: "Splash"});

export default createAppContainer(SplashRouter);