import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import Item from '../Item';
import {object} from 'prop-types';

function ItemList ({ state }) {
    const seed = useUIDSeed();

    return (
        <div className={classes.root}>
            {state.movies.map((movie) => {
                if (!movie.name) {
                    return;
                }

                return <Item key={seed(movie)} image={movie.poster_path} date={movie.first_air_date} title={movie.name} overview={movie.overview} genres={movie.genre_ids} genresAll={state.genres} />

            })}
        </div>
    )
}

ItemList.propTypes = {
    data: object
}

export default ItemList;
