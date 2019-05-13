// Reducer.  Redux will throw an error if a reducer returns 'undefined'.

// Always provide an intial state default argument.  If state is undefined, it will be processed as 'null'.  This is ES6.
export default (state = null, action) => {
    // Single switch statement to determine what (if any) response will be made by reducer to action
    switch (action.type) {
        // When action is of type 'select_city'
        case 'select_city':
            // Return city ID
            return action.payload;
        default:
            // If an action comes through that isn't expected, just return whatever state was returned previously
            return state;
    }
};