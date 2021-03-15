import React from 'react';
import classes from './error-boundary.css';
import Catch from './functional-error-boundary';

const ErrorBoundary = Catch((props, error) => {
    const { children } = props;

    const ErrorText = () => (
        <>
            <div className={classes.root}>Oops error..</div>
            <p className={classes.root__message} style={{ whiteSpace: 'pre-wrap' }}>
                <strong className={classes.root__subtitle}>{error.message && error.message.toString()}</strong>
                {error.stack}
            </p>
        </>
    );

    return <>{!error || !error.message ? children : <ErrorText />}</>
});

export default ErrorBoundary;
