export const selectCity = (cityId) => {
    // Action creator.  A plain JavaScript object
    return {
        type: 'select_city',
        payload: cityId
    };
};