import React, { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';


class AlbumList extends Component {

    state = { albums: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }



    renderAlbums(){
        return this.state.albums.map(album =>
            <Text key={album.title}>{album.title}</Text>);
    }



    render (){
        return (
            <View style={styles.thumbnailContainerStyle}>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    albumStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    }

});