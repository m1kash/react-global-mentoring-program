import React, {useState} from 'react';
import PopupContainer from '../../PopupContainer';
import DeleteMoviePopup from '../../DeleteMoviePopup';

function Delete () {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = function () {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <span onClick={togglePopup}>Delete</span>
            {showPopup && <PopupContainer depend={showPopup}>
                <DeleteMoviePopup title='Delete movie' closeAction={togglePopup}/>
            </PopupContainer>}
        </>
    );
}

export default Delete;