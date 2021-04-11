import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import Item from '../Item';
import {object} from 'prop-types';

function ItemList({state, setStateApp}) {
    const seed = useUIDSeed();

    return (
        <div className={classes.root}>
            {state.movies.map((movie) => {
                if (!movie.name) {
                    return;
                }

                return <Item key={seed(movie)} info={movie} genresAll={state.genres} state={state} setStateApp={setStateApp}/>

            })}
        </div>
    )
}

ItemList.propTypes = {
    data: object
}

export default ItemList;
