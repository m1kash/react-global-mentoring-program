import React, {useEffect, useState} from 'react';
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

function Item( {
    info,
    genresAll,
    state,
    setStateApp
               } ) {
    const {
        poster_path: image,
        first_air_date: date,
        name: title,
        genre_ids: genres,
        vote_average: rate,
        overview,
        id
    } = info;
    const [stateItem, setStateItem] = useState({
        visibleDetails: false
    });
    const showDetailsHandle = () => {
        setStateApp({
            ...state,
            'openMovieDialog': id
        })
        setStateItem({
            visibleDetails: true
        });
    };
    const hideDetailsHandle = () => {
        setStateApp({
            ...state,
            'openMovieDialog': false
        })
        setStateItem({
            visibleDetails: false
        });
    };
    useEffect(() => {
        if (state.openMovieDialog === id && stateItem.visibleDetails) {
            showDetailsHandle();
            window.scrollTo(0, 0);
        }

        return () => {
            if (state.openMovieDialog && stateItem.visibleDetails) {
                hideDetailsHandle();
            }
        }
    }, [state.openMovieDialog]);
    return (
        <>
            <div className={classes.root} onClick={showDetailsHandle}>
                <ToggleMenu className={classes.root__toggle}>
                    <Edit image={image} date={date} titleItem={title} genres={genres} overview={overview}
                          genresBase={genresAll}/>
                    <Delete title={title}/>
                </ToggleMenu>
                <Image image={image}/>
                <div className={classes.root__info}>
                    <Title title={title} type='h2'/>
                    <span className={classes.root__date}>
                        <DateComponent date={date}/>
                    </span>
                    <Genre categories={genres} genresBase={genresAll}/>
                </div>
            </div>
            <MovieDetails id={id} visible={stateItem.visibleDetails} image={image} title={title} rate={rate}
                          description={overview} date={date} hideVisible={hideDetailsHandle} state={state}
                          setStateApp={setStateApp}/>
        </>
    )
}

Item.propTypes = {
    image: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array
}

Item.defaultProps = {
    genres: []
};

export default Item;
