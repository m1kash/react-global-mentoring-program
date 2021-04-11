import React from 'react';
import Button from '../Button';
import AddMoviePopup from '../AddMoviePopup';
import PopupContainer from '../PopupContainer';
import useToggle from '../../hooks/useToggle';


function AddMovie({state, setStateApp}) {
    const [visible, togglePopupAction] = useToggle(false, true);

    return (
        <>
            <Button type='grey' onClick={togglePopupAction}>
                + Add Movie
            </Button>
            {visible && <PopupContainer depend={visible}>
                <AddMoviePopup closeAction={togglePopupAction} stateApp={state} setStateApp={setStateApp}/>
            </PopupContainer>}
        </>
    );
}

export default AddMovie;
