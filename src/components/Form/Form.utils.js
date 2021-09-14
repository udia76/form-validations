import _ from 'lodash';

export const handleValidation = (dispatch, id, value, required, isInvalid) => {
    if(_.isEmpty(value) && required || isInvalid){
        dispatch({type: 'addValidation', payload: {id}});
    }
    else if (!_.isEmpty(value) && required && !isInvalid){
        dispatch({type: 'removeValidation', payload: {id}});
    }
}