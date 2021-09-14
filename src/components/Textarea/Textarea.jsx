import style from './Textarea.module.css';

export default function Textarea({value, onChange}) {
    return (
        <textarea className={style.textarea} onChange={e => onChange(e.target.value)} value={value}/>
    );
};