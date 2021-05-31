import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateInput from './date-input';


describe('render element', () => {
    it('should has error', () => {
        const onChange = jest.fn();
        const { container } = render(<DateInput name='Date' placeholder={'change date'} error={true} onChange={onChange} />);

        expect(container.querySelector('.root--error')).toBeInTheDocument();
    });
})
