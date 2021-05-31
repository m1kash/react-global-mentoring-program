import React, {useRef} from 'react';
import Popup from '../Popup';
import FormWrap from '../Form';
import DEFAULT_VALUE_FORM from '../../constants/default-value-form';
import DEFAULT_PROPS_FORM from '../../constants/default-props-form';
import { validationScheme } from '../../validation-scheme';
import {connect, useDispatch} from 'react-redux';
import {createMovieRequest, loadMovies} from '../../actions/api';
import {actionLoadMovies} from '../../actions/movie';

function AddMoviePopup({
    title,
    closeAction,
    genres,
    formRef,
    app
}) {

    const dispatch = useDispatch();
    const resetForm = function () {
        const {resetForm} = formRef.current;

        resetForm();
    };
    const submitForm = function (e) {
        const {submitForm} = formRef.current;

        e.preventDefault();
        submitForm().then(() => {
            const {isValid} = formRef.current;

            if (isValid) {
                closeAction(e);
            }
        }).catch(err => console.error(err))
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
    const onSubmitForm = function (values) {
        createMovieRequest(`movies`, values).then(function (  ) {
            const setMovies = result => dispatch(actionLoadMovies(result));

            loadMovies( 'movies', setMovies, app);
        });
    }

    return (
        <Popup title={title} closeAction={closeAction} buttons={buttons}>
            <FormWrap
                genresBase={genres}
                defaultValueForm={DEFAULT_VALUE_FORM}
                defaultProps={DEFAULT_PROPS_FORM}
                validationScheme={validationScheme}
                formRef={formRef}
                onSubmitForm={onSubmitForm}
            />
        </Popup>
    );
}

function mapStateToProps (store) {
    const {genres, app} = store;

    return {
        genres,
        app
    }
}

export default connect(mapStateToProps)(AddMoviePopup);
