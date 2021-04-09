import React, {useState} from 'react';
import Popup from "../Popup";
import Field from "../Field";

function AddMoviePopup ({
        title,
        closeAction,
        stateApp,
        setStateApp
}) {
    const DEFAULT_VALUE_FORM = {
        'name': '',
        'first_air_date': '',
        'movie_url': '',
        'genre_ids': [],
        'overview': '',
        'runtime': ''
    };
    const [stateForm, setStateForm] = useState(DEFAULT_VALUE_FORM);
    const submitForm = function () {
        setStateApp({
            movies: [...stateApp.movies, stateForm],
            genres: stateApp.genres
        });
        closeAction();
    };
    const resetForm = function () {
        setStateForm(DEFAULT_VALUE_FORM);
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
            <Field id='name' name='Title' placeholder='Title' state={stateForm} setState={setStateForm} />
            <Field id='first_air_date' name='Release date' type='date' placeholder='Select date' state={stateForm} setState={setStateForm} />
            <Field id='movie_url' name='Movie url' placeholder='Movie URL here' state={stateForm} setState={setStateForm} />
            <Field id='genre_ids' name='Genre' placeholder='Select Genre' type='multiselect' options={stateApp.genres} state={stateForm} setState={setStateForm}/>
            <Field id='overview' name='Overview' placeholder='Overview here' state={stateForm} setState={setStateForm} />
            <Field id='runtime' name='Runtime' placeholder='Runtime here' state={stateForm} setState={setStateForm} />
        </Popup>
    );
}

export default AddMoviePopup;
