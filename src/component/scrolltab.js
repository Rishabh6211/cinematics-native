import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import React, { Component } from 'react';
import Home1 from './home1'
import Home2 from './home2'

 export default class Tab extends Component {

  render() {
    
    return (

    <ScrollableTabView tabBarBackgroundColor="#1b1b21" 
        tabBarActiveTextColor="#FFFFFF" 
        tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 17, color:"white"}}
        tabBarUnderlineStyle={{backgroundColor:"green"}}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
    >
        <Home1 tabLabel="NOW PLAYING" />
        <Home2 tabLabel="TOP BOX OFFICE" />
        <Home2 tabLabel="ANTICIPATED" />
        <Home2 tabLabel="UPCOMING" />
        <Home2 tabLabel="TRENDING" />
        <Home2 tabLabel="TOP RATED" />
    </ScrollableTabView>

    );
  }

}