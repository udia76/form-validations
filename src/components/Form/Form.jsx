import _ from 'lodash';
import {Types} from './Form.mapper';
import Field from './Form.field';
import Context from './Form.context';

export default function Form({value, onChange, structure, dispatch}) {
    return (
        <Context.Provider value={{dispatch}}>
            {structure.map(({type, label, model, required, ...config}, i) => {
                const Component = Types[type];
                return (
                    <Field label={label} required={required} key={i}>
                        <Component {...Component.mapper(config)} value={_.get(value, model)}
                                   onChange={v => onChange(_.set({...value}, model, v))} required={required} id={`Field${i}`}/>
                    </Field>
                );
            })}
        </Context.Provider>
    );
};