import React, {useEffect} from 'react';
import classes from './item.css';
import Image from './Image/image';
import Title from '../Title';
import DateComponent from './Date';
import Genre from './Genre/genre';
import PropTypes from 'prop-types';
import ToggleMenu from '../ToggleMenu';
import Delete from './Delete';
import Edit from './Edit';
import MovieDetails from '../MovieDetails';
import {connect, useDispatch} from 'react-redux';
import {openMovie} from '../../actions/actionOpenMovie';

function Item( { info,openMovieDialog } ) {
    const {
        poster_path,
        release_date,
        title,
        genres,
        id
    } = info;
    const dispatch = useDispatch();
    const showDetailsHandle = () => {
        dispatch(openMovie(id));
    };
    const hideDetailsHandle = () => {
        dispatch(openMovie(false));
    };
    useEffect(() => {
        if (openMovieDialog === id) {
            window.scrollTo(0, 0);
        }
    }, []);
    return (
        <>
            <div className={classes.root} onClick={showDetailsHandle}>
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
            {openMovieDialog === id && <MovieDetails id={id} visible={openMovieDialog === id} hideVisible={hideDetailsHandle} />}
        </>
    )
}

Item.propTypes = {
    info: PropTypes.object,
    openMovieDialog: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
}

Item.defaultProps = {
    openMovieDialog: false,
    info: {}
};

function mapDispatchToProps (store) {
    const { app } = store;
    return {
        openMovieDialog: app.openMovie
    }
}

export default connect(mapDispatchToProps)(Item);
