import React from 'react';
import PropTypes from 'prop-types';
import logoIMG from './logo.png';
import {Link} from 'react-router-dom';

function Logo( {
    onClick,
    nameSite,
    description,
    height,
    width
}) {

    return (
        <Link to='/' onClick={onClick} title={` ${nameSite} - ${description}`}>
            <img src={logoIMG} alt={nameSite} height={height} width={width}/>
        </Link>
    )
}

Logo.propTypes = {
    nameSite: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};

Logo.defaultProps = {
    height: 28,
    width: 190
};

export default Logo;
