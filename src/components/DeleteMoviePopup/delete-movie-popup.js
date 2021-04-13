import React from 'react';
import Popup from '../Popup';

function DeleteMoviePopup(props) {
    const buttons = [
        {
            name: 'Confirm',
            type: 'secondary',
            onClick: () => {
            }
        }
    ];

    return (
        <>
            <Popup {...props} buttons={buttons}>
                Are you sure you want to delete this movie?
            </Popup>
        </>
    );
}

export default DeleteMoviePopup;