import React from 'react';
import Popup from '../Popup';
import Field from '../Field';
import DEFAULT_VALUE_FORM from '../../constants/default-value-form';
import cloneDeep from 'lodash/cloneDeep';
import {connect, useDispatch} from 'react-redux';
import {createMovieRequest, loadMovies} from '../../actions/api';
import {setForm} from '../../actions/actionSetForm';
import {actionLoadMovies} from '../../actions/actionLoadMovies';
function AddMoviePopup({
    title,
    closeAction,
    genresBase,
    formValues,
    app
}) {
    const dispatch = useDispatch();
    const defaultValueForm = cloneDeep(DEFAULT_VALUE_FORM);

    const submitForm = function (e) {
        createMovieRequest(`movies`, formValues).then(function (  ) {
            const setMovies = result => dispatch(actionLoadMovies(result));

            loadMovies( 'movies', setMovies, app);
        });
        closeAction(e);
    };
    const resetForm = function () {
        dispatch(setForm(defaultValueForm));
    };
    const buttons = [
        {
            name: 'Reset',
            type: 'primary',
            onClick: resetForm
        },
        {
            name: 'Submit',
            type: 'secondary',
            onClick: submitForm
        }
    ];

    return (
        <Popup title={title} closeAction={closeAction} buttons={buttons}>
            <Field id='title' name='Title' placeholder='Title'/>
            <Field id='tagline' name='Tagline' placeholder='Tagline'/>
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

export default connect(mapStateToProps)(AddMoviePopup);
