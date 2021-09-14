import cls from 'classnames';
import Tooltip from '../Tooltip/Tooltip';
import style from './Button.module.css';

export default function Button({children, onClick, disabled}) {
    return (
        <Tooltip content={'Please fix validation issues before create'} enabled={disabled}>
            <button className={cls(style.button, {[style.disabled]: disabled})} onClick={onClick} >
                {children}
            </button>
        </Tooltip>
    );
};