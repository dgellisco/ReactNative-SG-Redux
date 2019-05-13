// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    LayoutAnimation,
    Platform,
    Text,
    TouchableWithoutFeedback,
    UIManager,
    View
} from 'react-native';
import { connect } from 'react-redux';
// LOCAL IMPORTS
import { CardSection } from './common';
// Imports all actions from action folder, and assigns to var 'actions'
import * as actions from '.././action';

class ListItem extends Component {
    
    // Lifecycle method
    componentWillUpdate() {
        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
              UIManager.setLayoutAnimationEnabledExperimental(true);
            LayoutAnimation.spring();
          }
        LayoutAnimation.spring();
    }

    // Helper method
    renderDetails() {
        const { cityHeaderStyle, iconStyle, titleStyle } = styles;
        const { city, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <View style={cityHeaderStyle}>
                        <Image
                            style={iconStyle}
                            source={{ uri: city.countryIcon }}
                        /> 
                        <Text style={titleStyle}>
                            {city.cityName}
                        </Text>
                    </View>
                    <Text>{city.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { imageContainerStyle, imageStyle } = styles;
        const { id, imageUrl } = this.props.city;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectCity(id)}
            >
                <View>
                    <CardSection style={imageContainerStyle}>   
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
    cityHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        height: 50,
        width: 50
    },
    imageContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

// mapStateToProps is our ability to interact with application state and components.
// Plucks application state and inject it into the component.  This causes the app to re-render.
// Whenever application state changes, this will re-run.  It will pass in a new set of props to our component, which will cause the component to re-render.
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
