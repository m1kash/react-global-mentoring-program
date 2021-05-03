import React from 'react';
import Popup from '../Popup';
import {removeMovie} from '../../actions/actionRemoveMovie'
import {useDispatch} from 'react-redux';
import {loadMovies, removeMovieRequest} from '../../actions/api';
import {actionLoadMovies} from '../../actions/actionLoadMovies';
import {connect} from 'react-redux';

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