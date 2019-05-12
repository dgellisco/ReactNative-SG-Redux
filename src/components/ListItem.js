import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// Imports all actions from action folder, and assigns to var 'actions'
import * as actions from '.././action';

class ListItem extends Component {

    render() {
        const { imageStyle, titleStyle } = styles;
        console.log(this.props);

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
        paddingLeft: 15,
        height: 300,
        width: 300
    }
}

// Connect:
// First argument is explicitly for mapStateToProps.  Otherwise, must be null.
// Second argument is for actions.  Passed to component as props.
// Modifies what data will be provided to ListItem as props
export default connect(null, actions)(ListItem);
