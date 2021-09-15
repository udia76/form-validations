import {useEffect, useRef, useState} from 'react';

export default () => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();
    const menuRef = useRef();

    const handleClickOutside = e => {
        if (!ref.current.contains(e.target) && menuRef.current && !menuRef.current.contains(e.target)) {
            setVisible(false);
        }
    }

    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setVisible(true);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return {ref, menuRef, isVisible, setVisible};
};