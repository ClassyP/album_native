import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

export default class App extends Component {


  render() {
  console.log(this.state);

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