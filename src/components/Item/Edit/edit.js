import React, {useState} from 'react';
import PopupContainer from '../../PopupContainer';
import EditMoviePopup from '../../EditMoviePopup/edit-movie-popup';
import DeleteMoviePopup from '../../DeleteMoviePopup';

function Edit (props) {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = function (e) {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <div onClick={togglePopup}>Edit</div>
            {showPopup && <PopupContainer depend={showPopup}>
                <EditMoviePopup {...props} title='Edit Movie' active={showPopup} setShowPopup={setShowPopup}
                                closeAction={togglePopup}/>
            </PopupContainer>}
        </>
    );
}

export default Edit;