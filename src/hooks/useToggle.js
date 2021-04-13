import {useCallback, useState} from 'react';

const useToggle = (initialValue = false, stopBubble = false) => {
    const [flag, setFlag] = useState(initialValue);

    const toggle = useCallback((e) => {
        e.preventDefault();
        if (stopBubble) {
            e.stopPropagation();
        }

        setFlag(!flag);
    }, [flag]);

    return [flag, toggle];
}

export default useToggle;