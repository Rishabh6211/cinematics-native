import  ScrollableTabView from 'react-native-scrollable-tab-view';
import React, { Component } from 'react';
import Home1 from './home1'
import Home2 from './home2'
 export default class Tab extends Component {

  render() {
    
    return (

    <ScrollableTabView>
        <Home1 tabLabel="React" />
        <Home2 tabLabel="Flow" />
        <Home2 tabLabel="Flow" />
        <Home2 tabLabel="Flow" />
        <Home2 tabLabel="Flow" />
        <Home2 tabLabel="Flow" />
    </ScrollableTabView>

    );
  }

}