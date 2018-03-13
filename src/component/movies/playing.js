import React, { Component } from "react";
import { Actions } from 'react-native-router-flux'
import { FlatList, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import {Get_PlayingNow} from '../../actions/movies'
class Playing extends Component {

  constructor(props){
		super(props)
		this.state = {list: []}

	}

  componentDidMount() {
    this.props.getnow();
  }

  
  render() {
    alert(JSON.stringify(this.props.list))
    return (

      <View style={styles.container}>
       <Text>Playing</Text>


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
mapStateToProps = (state) =>{
 
  return {list : state.now_Playing.playing ? state.now_Playing.playing : null }
}

export default connect(mapStateToProps, {getnow:Get_PlayingNow})(Playing)
