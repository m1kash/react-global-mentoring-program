import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import Item from '../Item';
import {object} from 'prop-types';

function ItemList (props) {
    const seed = useUIDSeed();
    const { data } = props;

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

ItemList.propTypes = {
    data: object
}

export default ItemList;
