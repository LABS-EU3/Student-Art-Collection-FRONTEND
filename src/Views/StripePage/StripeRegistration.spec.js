import React from 'react';
import {render} from '@testing-library/react';
import StripeRegistration from './StripeRegistrationPage';

test('render 2 chiled', () => {
    const { container, getAllByText } = render(<StripeRegistration />)
    const Text = getAllByText(/with Stripe/i)
    expect(container.children.length).toBe(1);
    expect(Text.length).toBe(2)
})