import {useContext} from 'react';
import cls from 'classnames';
import Context from './Checkbox.context';
import style from './Checkbox.module.css';

export default function Item({value: _value, children}) {
    const {value, onChange} = useContext(Context);
    const checked = value.includes(_value);
    const toggle = () => {
        if (checked) {
            onChange(value.filter(v => v !== _value));
        } else {
            onChange([...value, _value]);
        }
    };
    return (
        <div className={cls(style.checkbox, {[style.checked]: checked})} onClick={toggle}>
            <div className={style.box}>{checked ? '✔' : ''}</div>
            {children}
        </div>
    );
};