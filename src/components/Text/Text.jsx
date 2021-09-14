import { Check , X} from 'react-feather';
import {useContext, useCallback, useEffect} from 'react';
import RegexParser from 'regex-parser';
import cls from 'classnames';
import Context from '../Form/Form.context';
import {handleValidation} from '../Form/Form.utils';
import {useFocusabilityState} from '../../hooks';
import style from './Text.module.css';

export default function Text({value, onChange, validations, required, id}) {
    const {ref, hasFocus, setFocus} = useFocusabilityState(false);
    const {dispatch} = useContext(Context);
    useEffect(() => handleValidation(dispatch, id, value, required, isInvalid), [value]);

    const valid = validations.map(validation => {
        return RegexParser(validation.regex).test(value)});
    const isInvalid = valid.some(v => !v);

    const handleOnChange = useCallback(value => {
        onChange(value);
    }, [value]);

    return (
        <div className={style.wrapper}>
            <div className={cls(style.textWrapper, {[style.focus]: hasFocus})}>
                <input className={style.text} type='text' value={value} onChange={e => handleOnChange(e.target.value)}  ref={ref} onFocus={() => setFocus(true)}
                       onBlur={() => setFocus(false)}/>
                <div className={cls(style.icon, {[style.valid]: !isInvalid}, {[style.invalid]: isInvalid})}>{isInvalid ? <X/>: <Check/>}</div>
            </div>
            {hasFocus && <div className={style.validationsWrapper}>
                {validations.map((validation, index) => (
                    <div className={style.validationWrapper} key={index}>
                        <div className={cls(style.icon, {[style.valid]: valid[index]}, {[style.invalid]: !valid[index]})}>{valid[index] ? <Check/>: <X/>}</div>
                        <span>{validation.message}</span>
                    </div>
                ))}
            </div>}
        </div>
    );
};