import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class CityList extends Component {

    // Helper function
    renderItem(city) {
        return <ListItem city={city.item} />;
    }

    render() {
        return (
            <FlatList
                // Contains data of cities
                data={this.props.cities}
                // Renders components
                renderItem={this.renderItem}
                // Unique identifier
                keyExtractor={city => city.id.toString()}
            />
        );
    }
}

// Function to take state and map some (or all?) of it to props
const mapStateToProps = state => {
    console.log(state.cities);
    return { cities: state.cities };
};

// Calls the function 'connect'.  When connect is called, it returns another function.
// We then immediately call that returned function *with* the CityList.
export default connect(mapStateToProps)(CityList);
