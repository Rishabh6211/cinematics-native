import React,{Component} from 'react';
import {StyleSheet} from  'react-native';
import {Stack,Scene,Router,ActionConst,Drawer} from 'react-native-router-flux';

import sidebarComponent from './sidebar'
import Home from './home'
import icon from '../../images/icon.png'
const Route = () => {

	return(
		<Router 
		navigationBarStyle={styles.navBar} 
		titleStyle={styles.navBarTitle} 
		barButtonTextStyle={styles.barButtonTextStyle} 
		barButtonIconStyle={styles.barButtonIconStyle}
        >
        <Scene key='root'>
        <Drawer
        hideNavBar
        key="drawer"
        contentComponent={sidebarComponent}
        drawerImage={icon}
        drawerWidth={250}
    
      >
      <Scene key='drawerDashboard' component={Home} title="Cinematics"/>
      </Drawer>
      </Scene>
		
	</Router>
	);
	
}
const styles = StyleSheet.create({
	navBar: {
		backgroundColor:'#1b1b21',
	},
	navBarTitle:{
		color:'#FFFFFF'
	},
	barButtonTextStyle:{
		color:'#FFFFFF'
	},
	barButtonIconStyle:{
		tintColor:'rgb(255,255,255)'
	}
});
export default Route;