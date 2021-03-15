import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import data from './test.json';
import Item from '../Item';

function ItemList () {
    const seed = useUIDSeed();

    return (
        <div className={classes.root}>
            {data.movies.map((movie) => {
                if (!movie.name) {
                    return;
                }

                return <Item key={seed(movie)} image={movie.poster_path} date={movie.first_air_date} title={movie.name} genres={movie.genre_ids} />

            })}
        </div>
    )
}

export default ItemList;
