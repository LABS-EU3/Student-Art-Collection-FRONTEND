import React from 'react';
import {render} from "@testing-library/react";
import RegistrationButton from './RegistrationButton';

test('render 1 child', () => {
    const { container } = render(<RegistrationButton />)
    expect(container.children.length).toBe(1);
})