
const reducer = (errors, action) => {
    switch (action.type) {
        case 'addValidation':
            if(!errors.some(error => error.id === action.payload.id)) {
                return [...errors, action.payload];
            }
            return errors;
        case 'removeValidation':
            return errors.filter(error => error.id !== action.payload.id);
        default:
            return errors;
    }
};

export default reducer;