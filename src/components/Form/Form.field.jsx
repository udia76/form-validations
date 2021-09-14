import style from './Form.module.css';

export default function Field({label, required, children}) {

    return (
        <div className={style.field}>
            <label>{label}:{required && <span className={style.required}>*</span>}</label>
            {children}
        </div>
    );
};