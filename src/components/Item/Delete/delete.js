import React from 'react';
import PopupContainer from '../../PopupContainer';
import DeleteMoviePopup from '../../DeleteMoviePopup';
import useToggle from '../../../hooks/useToggle';

function Delete() {
    const [showPopup, togglePopup] = useToggle(false, true);

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