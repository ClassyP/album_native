import React, { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class AlbumList extends Component {
    render (){
        return (
            <View style={styles.thumbnailContainerStyle}>
                <Text style={styles.headerContentStyle}>
                    AlbumList!
                </Text>
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