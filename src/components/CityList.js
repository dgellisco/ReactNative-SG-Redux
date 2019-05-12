import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
    return() {
        return;
    }
}

// Calls the function 'connect'.  When connect is called, it returns another function.
// When then immediately call that returned function *with* the CityList.
export default connect()(CityList);