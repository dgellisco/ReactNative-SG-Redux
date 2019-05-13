import React, { Component } from 'react';
import {
    Image,
    LayoutAnimation,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// Imports all actions from action folder, and assigns to var 'actions'
import * as actions from '.././action';

class ListItem extends Component {
    // Lifecycle method
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    // Helper method
    renderDetails() {
        const { iconStyle, imageStyle, titleStyle } = styles;
        const { city, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={titleStyle}>
                        {city.cityName}
                    </Text>
                    <Image
                        style={iconStyle}
                        source={{ uri: city.countryIcon }}
                    /> 
                    <Text>{city.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { imageStyle } = styles;
        const { cityName, countryIcon, id, imageUrl } = this.props.city;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectCity(id)}
            >
                <View>
                    <CardSection>   
                        <Image
                            style={imageStyle}
                            source={{ uri: imageUrl }}
                        />
                    </CardSection>
                    {this.renderDetails()}
                </View>
            </TouchableWithoutFeedback>
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
    },
    iconStyle: {
        height: 40,
        width: 40
    }
}

// Removed logic from component by placing it here
// ownProps is the same as 'this.props' for this component
const mapStateToProps = (state, ownProps) => {
    // If IDs match, this will be true.  Otherwise, it will be false.
    const expanded = state.selectedCityId === ownProps.city.id;
    // Key and value are the same ('expanded: expanded'), so they can be reduced to just 'expanded'.
    return { expanded };
};

// Connect:
// First argument is explicitly for mapStateToProps.  Otherwise, must be null.
// Second argument is for actions.  Passed to component as props.
// Modifies what data will be provided to ListItem as props
export default connect(mapStateToProps, actions)(ListItem);
