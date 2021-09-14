import { useState } from "react";
import style from './Tooltip.module.css';

const Tooltip = ({children, content, delay, enabled}) => {
    let timeout;
    const [active, setActive] = useState(false);

    const show = () => {
        timeout = setTimeout(() => {
            enabled && setActive(true);
        }, delay || 400);
    };

    const hide = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className={style.wrapper} onMouseEnter={show} onMouseLeave={hide}>
            {children}
            {active && (
                <div className={`${style.tooltip} ${style.top}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
