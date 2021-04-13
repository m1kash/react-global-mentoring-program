import React from 'react';
import classes from './error-boundary.css';

function ErrorText ({ error: {message, stack}}) {
    return (
        <>
            <div className={classes.root}>Oops error..</div>
            <p className={classes.root__message} style={{whiteSpace: 'pre-wrap'}}>
                <strong className={classes.root__subtitle}>{message && message.toString()}</strong>
                {stack}
            </p>
        </>
    )
}

class ErrorBoundary extends React.Component {
    state = {
        error: undefined
    };



    static getDerivedStateFromError(error) {
        return { error: error };
    }

    render() {
        return <>{!this.state.error || !this.state.error.message ? this.props.children : <ErrorText error={this.state.error} />}</>
    }
}

export default ErrorBoundary;