import React, {createRef} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddMoviePopup from './add-movie-popup';
import {createStore} from 'redux';
import reducers from '../../reducers';
import {Provider} from 'react-redux';

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducers, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('render element', () => {
    it('should render popup', () => {
        renderWithRedux(<AddMoviePopup title='Test Add popup' />);

        expect(screen.getByText(/Test Add popup/i)).toBeInTheDocument();
    });

    it('should work on reset form button', () => {
        const ref = createRef();
        const closeActionHandle = jest.fn();

        const {getByText} = renderWithRedux(<AddMoviePopup title='Test Add popup' formRef={ref} closeAction={closeActionHandle} />);
        ref.current.resetForm = jest.fn().mockResolvedValue({});

        userEvent.click(getByText(/Reset/i));

        expect(ref.current.resetForm).toBeCalled();
    });

    it('should work on submit form button', () => {
        const ref = createRef();
        const closeActionHandle = jest.fn();

        const {getByText, findByText} = renderWithRedux(<AddMoviePopup formRef={ref} title='Test Add popup' closeAction={closeActionHandle} />);
        ref.current.submitForm = jest.fn().mockResolvedValue({});
        ref.current.isValid = true;
        userEvent.click(getByText(/Submit/i));

        expect(ref.current.submitForm).toBeCalled();
    });
})
