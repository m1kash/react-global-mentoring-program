import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './item.css';
import Title from '../Title';
import DateComponent from './Date';
import Genre from './Genre/genre';
import Image from './Image/image';
import ToggleMenu from '../ToggleMenu';
import Edit from './Edit';
import Delete from './Delete';

function Item( { info } ) {
    const {
        poster_path,
        release_date,
        title,
        genres,
        id
    } = info;
    return (
        <>
            <Link className={classes.root} to={`/movies/${id}`} >
                <div className={classes.root}>
                    <ToggleMenu className={classes.root__toggle}>
                        <Edit id={id} />
                        <Delete title={title} id={id}/>
                    </ToggleMenu>
                    <Image image={poster_path}/>
                    <div className={classes.root__info}>
                        <Title title={title} type='h2'/>
                        <span className={classes.root__date}>
                        <DateComponent date={release_date}/>
                    </span>
                        <Genre categories={genres} />
                    </div>
                </div>
            </Link>
        </>
    )
}

Item.propTypes = {
    info: PropTypes.object,
}

Item.defaultProps = {
    info: {}
};


export default Item;
