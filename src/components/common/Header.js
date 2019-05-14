// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Styling of this component
const styles = {
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    },
    viewStyle: {
        // Color
        backgroundColor: '#a3c3cc',
        // Positioning
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // Shadowing ios
        shadowColor: '#9e9e9e',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        // Shadowing android
        elevation: 2,
        position: 'relative',
        // Border
        borderColor: '#9e9e9e',
        borderBottomWidth: 1.5
    }
};

// Make the component available to other parts of the app
export { Header };
