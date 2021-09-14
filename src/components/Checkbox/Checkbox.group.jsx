import Context from './Checkbox.context';
import style from './Checkbox.module.css';
import {useContext, useEffect} from 'react';
import FormContext from '../Form/Form.context';
import {handleValidation} from '../Form/Form.utils';

export default function CheckboxGroup({value, onChange, required, id, children}) {
    const {dispatch} = useContext(FormContext);
    useEffect(() => handleValidation(dispatch, id, value, required), [value]);

    return (
        <Context.Provider value={{value, onChange}}>
            <div className={style.group}>
                {children}
            </div>
        </Context.Provider>
    );
};