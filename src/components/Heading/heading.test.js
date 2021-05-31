import React from 'react';
import {render, screen} from '@testing-library/react';
import Heading from './';

describe('render element', () => {
    it('checked type element', function () {
        const TYPE = 'h3';
        const {container} = render(<Heading type={TYPE}>Test</Heading>);
        const element = container.querySelector(TYPE);
        expect(element).toBeTruthy();
    });

    it('checked content text element', () => {
        const { getByText } = render(<Heading type='h1'>Test</Heading>);;
        const text = getByText(/test/gi);

        expect(text).toBeInTheDocument();
    });

    it('checked custom class', () => {
        const additionalClass = 'test-class';
        const additionalClasses = [additionalClass]
        const { container } = render(<Heading type='h1' classNames={additionalClasses}>Test</Heading>);;
        const element = container.querySelector(`.${additionalClass}`);

        expect(element).toBeTruthy();
    });

    it('checked role accessability', () => {
        render(<Heading type='h1'>Test</Heading>)

        screen.getByRole('heading', {'level': 1});
    });
})