import cls from 'classnames';
import style from './DropDown.module.css';

export default function Item({value, onChange, active, children}) {
    return (
        <div className={cls(style.dropdownItem, {[style.active] : active})} onClick={() => onChange(value)}>
            {children}
        </div>
    );
};