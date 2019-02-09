/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';



export default class App extends Component {

  state = { ready: false };

  componentDidMount() {
    console.log('hello me');
  }

  
  render() {


    return (
        <View style={styles.container}>
        <Header headerText={"Albums"}/>
          <AlbumList/>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

});


//