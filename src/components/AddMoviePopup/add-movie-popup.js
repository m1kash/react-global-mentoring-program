import React, {useState} from 'react';
import Popup from '../Popup';
import Field from '../Field';
import DEFAULT_VALUE_FORM from '../../constants/default-value-form';
import cloneDeep from 'lodash/cloneDeep';
function AddMoviePopup({
    title,
    closeAction,
    stateApp,
    setStateApp
}) {
    const defaultValueForm = cloneDeep(DEFAULT_VALUE_FORM);
    defaultValueForm['genre_ids']['options'] = stateApp.genres;
    const [stateForm, setStateForm] = useState(defaultValueForm);
    const submitForm = function () {
        setStateApp({
            movies: [...stateApp.movies, stateForm],
            genres: stateApp.genres
        });
        closeAction();
    };
    const resetForm = function () {
        setStateForm(defaultValueForm);
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
            <Field id='name' name='Title' placeholder='Title' state={stateForm} setState={setStateForm}/>
            <Field id='first_air_date' name='Release date' type='date' placeholder='Select date' state={stateForm}
                   setState={setStateForm}/>
            <Field id='movie_url' name='Movie url' placeholder='Movie URL here' state={stateForm}
                   setState={setStateForm}/>
            <Field id='genre_ids' name='Genre' placeholder='Select Genre' type='multiselect' options={stateApp.genres}
                   state={stateForm} setState={setStateForm}/>
            <Field id='overview' name='Overview' placeholder='Overview here' state={stateForm} setState={setStateForm}/>
            <Field id='runtime' name='Runtime' placeholder='Runtime here' state={stateForm} setState={setStateForm}/>
        </Popup>
    );
}

export default AddMoviePopup;
