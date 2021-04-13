import React, {useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import classes from './popup-container.css';


function PopupContainer({children, depend}) {
    const container = useMemo(() => document.createElement('div'), []);
    container.classList.add(classes.root);
    const toggleScrollState = (el) => el.classList.toggle(classes['overflow-disable']);

    useEffect(() => {
        document.body.appendChild(container);
        toggleScrollState(document.body);
        return () => {
            document.body.removeChild(container);
            toggleScrollState(document.body);
        }
    }, [depend])

    return ReactDOM.createPortal(
        children,
        container
    );
}

export default PopupContainer;
