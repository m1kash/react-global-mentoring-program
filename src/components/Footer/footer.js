import React from 'react';

import classes from './footer.css';


function Footer (props) {
    const {children} = props;

    return (
        <footer className={classes.root}>
            {children}
        </footer>
    )
}

export default Footer;
