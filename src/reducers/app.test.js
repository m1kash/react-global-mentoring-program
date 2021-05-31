import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reducers from './index';
import Filter from '../components/Result/Filter';
import Sorter from '../components/Result/Sorter';

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducers, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('App reducer test', () => {
    it('Check default state for sorter', () => {
       const { getByRole } = renderWithRedux(<Sorter />);

       expect(getByRole('combobox')).toHaveTextContent(/Default/i)
    });

    it('Change sorter value', () => {
        const { getByRole, getByText } = renderWithRedux(<Sorter />);

        userEvent.selectOptions(getByRole('combobox'), 'release_date');
        expect(getByText(/Release Date/i)).toBeTruthy();
    });

    it('Check default state for filter', () => {
        const { container } = renderWithRedux(<Filter />);

        expect(container.querySelector('.root__item--active')).toHaveTextContent(/all/i);
    });

    it('Change filter value', () => {
        const { getByText, container } = renderWithRedux(<Filter />);

        userEvent.click(getByText(/Action/i));
        expect(container.querySelector('.root__item--active')).toHaveTextContent(/Action/i);
    });
})