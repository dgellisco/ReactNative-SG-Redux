import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

    render() {
        const { imageStyle, titleStyle } = styles;

        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.city.city}
                </Text>
                <Image
                    style={imageStyle}
                    source={{ uri: this.props.city.image }}
                />
                
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    imageStyle: {
        resizeMode: 'cover',
        height: 100,
        width: 100
    }
}

export default ListItem;