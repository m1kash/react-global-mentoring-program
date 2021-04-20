import React from 'react';
import Button from '../Button';
import AddMoviePopup from '../AddMoviePopup';
import PopupContainer from '../PopupContainer';
import useToggle from '../../hooks/useToggle';


function AddMovie() {
    const [visible, togglePopupAction] = useToggle(false, true);

    return (
        <>
            <Button type='grey' onClick={togglePopupAction}>
                + Add Movie
            </Button>
            {visible && <PopupContainer depend={visible}>
                <AddMoviePopup closeAction={togglePopupAction}/>
            </PopupContainer>}
        </>
    );
}

export default AddMovie;
