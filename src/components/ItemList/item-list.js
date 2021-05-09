import React from 'react';
import {useUIDSeed} from 'react-uid';
import classes from './item-list.css';
import Item from '../Item';
import {object} from 'prop-types';
import {connect} from 'react-redux';
import Heading from '../Heading';

function ItemList({movies}) {
    const seed = useUIDSeed();

    return (
        <div className={classes.root}>
            {movies.length > 0 ? movies.map((movie) => {
                if (!movie.title) {
                    return;
                }

                return <Item key={seed(movie)} info={movie} />

            }):<Heading type='h2' classNames={[classes['root__404']]}>No movies found</Heading>}
        </div>
    )
}

ItemList.propTypes = {
    data: object
}

function mapStateToProps(state) {
    const { movies } = state;

    return { movies };
}

export default connect(mapStateToProps)(ItemList);
