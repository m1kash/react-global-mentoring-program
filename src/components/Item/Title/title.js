import React from 'react';
import classes from './title.css';
import Heading from "../../Heading/heading";
import PropTypes from "prop-types";

function Title (props) {
    const { title } = props;

    return (
        <Heading classNames={[classes.root]} type={'h2'} >
            {title}
        </Heading>
    )
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;
