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
import axios from 'axios';


export default class App extends Component {

  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response));
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