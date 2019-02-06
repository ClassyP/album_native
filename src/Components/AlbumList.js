import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Albumlist = () => {
    return(
        <View style={styles.thumbnailContainerStyle}>
            <Text style={styles.headerContentStyle}> Albumlist!!!</Text>
        </View>
    );
};
export default Albumlist;

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