import {useEffect, useRef, useState} from 'react';

export default () => {
    const ref = useRef();
    const [hasFocus, setFocus] = useState(false);
    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setFocus(true);
        }
    }, []);
    return {ref, hasFocus, setFocus};
};