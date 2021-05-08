import React, {useEffect} from 'react';
import PopupContainer from '../../PopupContainer';
import EditMoviePopup from '../../EditMoviePopup/edit-movie-popup';
import useToggle from '../../../hooks/useToggle';

function Edit(props) {
    const [showPopup, togglePopup] = useToggle(false, true);
    return (
        <>
            <div onClick={togglePopup}>Edit</div>
            {showPopup && <PopupContainer depend={showPopup}>
                <EditMoviePopup {...props} title='Edit Movie' setShowPopup={togglePopup}
                                closeAction={togglePopup}/>
            </PopupContainer>}
        </>
    );
}

export default Edit;