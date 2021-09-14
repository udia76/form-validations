import React from 'react';
import cls from 'classnames';
import {ChevronUp} from 'react-feather';
import {useClickOutSide} from '../../hooks';
import style from './DropDown.module.css';

export default function DropDown({value, onChange, children}) {
    const {ref, menuRef, isVisible, setVisible} = useClickOutSide(false);
    const handleOnChange = value => {
        setVisible(false);
        onChange(value);
    }

    return (
        <div className={cls(style.dropdownWrapper, {[style.focus]: isVisible})} ref={ref}>
            <div className={cls(style.dropdown, {[style.visible]: isVisible})} onClick={() => setVisible(!isVisible)} >
                {React.Children.toArray(children).filter(child => child.props.value === value)[0].props.children || 'Select'}
                <ChevronUp/>
            </div>
            {isVisible && <div className={style.dropdownMenu}  ref={menuRef}>
                {React.Children.toArray(children).map(child => (
                    React.cloneElement(child, {onChange: handleOnChange, active: value === child.props.value})
                ))}
            </div>
            }
        </div>
    );
};