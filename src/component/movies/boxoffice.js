import React, { Component } from "react";
import { Actions } from 'react-native-router-flux'
import { FlatList, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
export default class BoxOffice extends Component {

    

  render() {
    
    return (

      <View style={styles.container}>
       <Text>Box office</Text>


      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor:"#FFFFFF"

  }
});

