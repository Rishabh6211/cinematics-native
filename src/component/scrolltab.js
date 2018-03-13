import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import React, { Component } from 'react';
import Playing from './movies/playing'
import BoxOffice from './movies/boxoffice'

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
        <Playing tabLabel="NOW PLAYING" />
        <BoxOffice tabLabel="TOP BOX OFFICE" />
        <BoxOffice tabLabel="TOP BOX OFFICE" />
    </ScrollableTabView>

    );
  }

}