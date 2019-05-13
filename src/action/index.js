// Action creator - a plain JavaScript FUNCTION that return actions.
export const selectCity = (cityId) => {
    // The action itself.  A plain JavaScript OBJECT.
    // Command or instructions to the reducers.
    return {
        type: 'select_city',
        payload: cityId
    };
};