import React, {useState} from 'react';
import Button from '../Button';
import AddMoviePopup from "../AddMoviePopup";
import PopupContainer from "../PopupContainer";


function AddMovie ({ state, setStateApp }) {
    const [showPopup, setShowPopup ] = useState(false);
    const togglePopup = function (e) {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <Button type={'grey'} onClick={togglePopup}>
                + Add Movie
            </Button>
            {showPopup && <PopupContainer depend={showPopup}>
                 <AddMoviePopup closeAction={togglePopup} stateApp={state} setStateApp={setStateApp} />
            </PopupContainer>}
        </>
    );
}

export default AddMovie;
