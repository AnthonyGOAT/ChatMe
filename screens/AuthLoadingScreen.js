import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  componentWillMount(){
      var firebaseConfig = {
          apiKey: "AIzaSyCrgNmIko5qbvkeu5KLn5xb86yWhMjBDJc",
          authDomain: "chatme-e2569.firebaseapp.com",
          databaseURL: "https://chatme-e2569.firebaseio.com",
          projectId: "chatme-e2569",
          storageBucket: "",
          messagingSenderId: "653160730227",
          appId: "1:653160730227:web:43d2a28dc01d4f7ccd2406"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
