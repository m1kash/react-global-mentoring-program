import React, {useState} from 'react';
import Popup from '../Popup';
import Field from '../Field';


function EditMoviePopup({
                            image,
                            date,
                            title,
                            overview,
                            genres,
                            titleItem,
                            closeAction,
                            genresBase
                        }) {
    const DEFAULT_VALUE_FORM = {
        'name': titleItem,
        'first_air_date': date,
        'movie_url': image,
        'genre_ids': genres,
        'overview': overview,
        'runtime': ''
    };
    const [stateForm, setStateForm] = useState(DEFAULT_VALUE_FORM);
    const submitForm = function () {
        console.log(stateForm);
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
            name: 'Save',
            type: 'secondary',
            onClick: submitForm
        }
    ];

    return (
        <Popup title={title} buttons={buttons} closeAction={closeAction}>
            <Field id='name' name='Title' placeholder='Title' state={stateForm} setState={setStateForm}/>
            <Field id='first_air_date' name='Release date' type='date' placeholder='Select date' state={stateForm}
                   setState={setStateForm}/>
            <Field id='movie_url' name='Movie url' placeholder='Movie URL here' state={stateForm}
                   setState={setStateForm}/>
            <Field id='genre_ids' name='Genre' placeholder='Select Genre' type='multiselect' options={genresBase}
                   state={stateForm} setState={setStateForm}/>
            <Field id='overview' name='Overview' placeholder='Overview here' state={stateForm} setState={setStateForm}/>
            <Field id='runtime' name='Runtime' placeholder='Runtime here' state={stateForm} setState={setStateForm}/>
        </Popup>
    );
}

export default EditMoviePopup;
