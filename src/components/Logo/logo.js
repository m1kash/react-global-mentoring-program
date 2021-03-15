import React from 'react';
import PropTypes from 'prop-types';
import logoIMG from './logo.png';


function Logo (props) {
    const { link, nameSite, description, height, width} = props;

    return (
        <a href={link} title={` ${nameSite} - ${description}`}>
            <img src={logoIMG} alt={nameSite} height={height} width={width} />
        </a>
    )
}

Logo.propTypes = {
    link: PropTypes.string,
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
