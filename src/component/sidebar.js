import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity, ScrollView, StyleSheet,Dimensions} from 'react-native'

import { Actions } from 'react-native-router-flux';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import iconsrc from '../../images/logo.png'
// const PROFILE_ICON = require ('../img/user.png');
// onPress={() => { drawer.close(); DismissKeyboard(); Actions.schedule.call() }}

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
  sidemenumaindiv: {
    flex:1,
    flexDirection: 'column'
  },
  sidemenuitems: {
    padding:10,
    paddingBottom: 0,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sidemenuText: {
    fontSize: 16,
    textAlign:'left',
    color:'#666',
    fontWeight:'normal',
    marginLeft: 10
  },
  breakitems:{
    padding:10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 2,
    height: height*0.1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default class sidebarComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


	componentWillMount(){
	}

	componentDidMount(){
    SplashScreen.hide();
	}

	render() {
		const { drawer } = this.context;
		return (
			<View style={styles.sidemenumaindiv}>
				<View style={{flexDirection: 'row',height:height*0.2, alignItems:'center', backgroundColor:'#333435'}}>

          <View style={{flexDirection : 'row', height:height*0.2, alignItems:'center' }}>
          
           
         
          <Image source={iconsrc}  style={{top:height*0.04}}/>
          <Text style={{fontSize:20, top:height*0.04,color:"white", marginLeft: width*0.01}}>Cinematics</Text>
          
					</View>
				</View>
        <ScrollView>
  				<TouchableOpacity style={styles.sidemenuitems}
            >
  						<Icon name="film" size={20} color="#0091EA" />
  						<Text style={styles.sidemenuText}>{'Movies'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            >
  					<Icon name="tv" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Tv Shows'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
           >
  					<Icon name="search" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Discover'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.breakitems}
            >
  					<Icon name="user" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Popular People'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.breakitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="bell" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Reminders'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="question-circle" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Contact Developer'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="cog" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Setting'}</Text>
  				</TouchableOpacity>
        </ScrollView>
			</View>
		)
	}
}

