import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './multi-select';

const optionsDefault = [
    "Test1",
    "Test2",
    "Test3",
];

describe('render element', () => {
    it('should have button Add Movie', () => {
        const onChange = jest.fn();
        render(<MultiSelect name='Multiselect' value={[]} options={optionsDefault} onChange={onChange} id={'multiselect'} />);

        expect(screen.getByText(/Multiselect/i)).toBeInTheDocument();
    });

    it('should open this popup', () => {
        const onChange = jest.fn();
        const { getByText, container } = render(<MultiSelect name='Multiselect' value={[]} options={optionsDefault} onChange={onChange} id={'multiselect'} />);

        userEvent.click(getByText(/Open dropdown/i));

        expect(container.querySelector('.root__button--open')).toBeInTheDocument();
    });

    it('should checked this multiselect', () => {
        const onChange = jest.fn();
        const { getByText, getByLabelText } = render(<MultiSelect name='Multiselect' value={[]} options={optionsDefault} onChange={onChange} id={'multiselect'} />);

        userEvent.click(getByText(/Open dropdown/i));
        userEvent.click(getByLabelText(/Test2/i))
        userEvent.click(getByText(/Open dropdown/i));

        expect(onChange).toBeCalled();
    });

    it('should has error', () => {
        const onChange = jest.fn();
        const { container } = render(<MultiSelect name='Multiselect' value={[]} options={optionsDefault} onChange={onChange} id={'multiselect'} error={true} />);

        expect(container.querySelector('.root--error')).toBeInTheDocument();
    });
})
