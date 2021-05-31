import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './text-input';


describe('render element', () => {
    it('should has error', () => {
        const onChange = jest.fn();
        const { container } = render(<TextInput name='Text input' placeholder={'change text'} error={true} onChange={onChange} />);

        expect(container.querySelector('.root--error')).toBeInTheDocument();
    });
})
