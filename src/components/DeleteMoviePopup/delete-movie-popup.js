import React from 'react';
import {connect, useDispatch} from 'react-redux';
import Popup from '../Popup';
import {actionLoadMovies, removeMovie} from '../../actions/movie'
import {loadMovies, removeMovieRequest} from '../../actions/api';

function DeleteMoviePopup({
    id,
    app,
    ...props
}) {
    const dispatch = useDispatch();
    const setMovies = result => dispatch(actionLoadMovies(result));
    const buttons = [
        {
            name: 'Confirm',
            type: 'secondary',
            onClick: () => {
                dispatch(removeMovie(id));
                removeMovieRequest(dispatch, `movies/${id}`).then(() => {
                    loadMovies( 'movies', setMovies, app)
                });
            }
        }
    ];

    return (
        <>
            <Popup {...props} buttons={buttons}>
                Are you sure you want to delete this movie?
            </Popup>
        </>
    );
}

function mapStateToProps (store) {
    const {app} = store;

    return {
        app
    }
}

export default connect(mapStateToProps)(DeleteMoviePopup);