import React, {useEffect, useRef, useState} from 'react';
import Popup from '../Popup';
import FormWrap from '../Form';
import {connect, useDispatch} from 'react-redux';
import { editMovieRequest, loadMovieDetailsRequest, loadMovies} from '../../actions/api';
import {isEmpty} from 'lodash';
import {actionLoadMovies} from '../../actions/movie';
import DEFAULT_PROPS_FORM from '../../constants/default-props-form';
import {validationScheme} from '../../validation-scheme';

function EditMoviePopup({
    title,
    closeAction,
    id,
    app,
    genresBase
}) {
    const dispatch = useDispatch();
    const formRef = useRef();
    const [defaultValueForm, setDefaultValueForm] = useState();
    useEffect(() => {
        loadMovieDetailsRequest(`movies/${id}`, {}, setDefaultValueForm);

        return () => {};
    }, []);
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
        });
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
    const onSubmitForm = function (values) {
        editMovieRequest(`movies`, values).then(function (  ) {
            const setMovies = result => dispatch(actionLoadMovies(result));

            loadMovies( 'movies', setMovies, app);
        });
    }

    if (isEmpty(defaultValueForm)) {
        return null;
    }

    return (
        <Popup title={title} buttons={buttons} closeAction={closeAction}>
            <FormWrap
                genresBase={genresBase}
                defaultValueForm={defaultValueForm}
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
        genresBase: genres,
        app
    }
}

export default connect(mapStateToProps)(EditMoviePopup);
