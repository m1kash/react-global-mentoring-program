import React, {useEffect} from 'react';
import Popup from '../Popup';
import Field from '../Field';
import {connect, useDispatch} from 'react-redux';
import {editMovieRequest, loadMovieDetailsRequest, loadMovies} from '../../actions/api';
import {setForm} from '../../actions/actionSetForm';
import {isEmpty, isEqual} from 'lodash';
import {actionLoadMovies} from '../../actions/actionLoadMovies';


function EditMoviePopup({
    title,
    closeAction,
    id,
    formValues,
    app,
    genresBase
}) {
    const dispatch = useDispatch();
    const setDefaultStateForm = (result) => {
        dispatch(setForm(result));
    };
    useEffect(() => {
        loadMovieDetailsRequest(`movies/${id}`, {}, setDefaultStateForm);
    }, []);
    const submitForm = function () {
        editMovieRequest(`movies`, formValues).then(function (  ) {
            const setMovies = result => dispatch(actionLoadMovies(result));

            loadMovies( 'movies', setMovies, app);
        });
    };
    const resetForm = function () {
        dispatch(setForm(formValues));
    };
    const buttons = [
        {
            name: 'Reset',
            type: 'primary',
            onClick: resetForm
        },
        {
            name: 'Save',
            type: 'secondary',
            onClick: submitForm
        }
    ];

    if (isEmpty(formValues)) {
        return null;
    }

    return (
        <Popup title={title} buttons={buttons} closeAction={closeAction}>
            <Field id='title' name='Title' placeholder='Title'/>
            <Field id='release_date' name='Release date' type='date' placeholder='Select date' />
            <Field id='poster_path' name='Movie url' placeholder='Movie URL here' />
            <Field id='genres' name='Genre' placeholder='Select Genre' type='multiselect' options={genresBase} />
            <Field id='overview' name='Overview' placeholder='Overview here' />
            <Field id='runtime' name='Runtime' type='number' placeholder='Runtime here' />
        </Popup>
    );
}

function mapStateToProps (store) {
    const {form, genres, app} = store;

    return {
        formValues: form,
        genresBase: genres,
        app
    }
}

export default connect(mapStateToProps)(EditMoviePopup);
