//Import Libraries to make component
import React from "react";
import { Text, View } from "react-native";

// Make a component

const Header = props => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: "#9fafc9",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        paddingTop: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevaton: 4,
        position: "relative"
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available to the rest of the app
export default Header;
