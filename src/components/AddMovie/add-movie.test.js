import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddMovie from './add-movie';
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
    it('should have button Add Movie', () => {
        render(<AddMovie />);

        expect(screen.getByText(/Add Movie/i)).toBeInTheDocument();
    });

    it('should open this popup', () => {
        const { getByText } = renderWithRedux(<AddMovie />);

        userEvent.click(getByText(/Add Movie/i));

        expect(screen.getByText(/Add movie popup/i)).toBeInTheDocument();
    });
})
