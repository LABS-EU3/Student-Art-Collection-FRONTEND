import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Test from './Test';

describe.only('<Test />' , () =>{
    const editArt = {
        name: 'editArt.name',
        artistName: 'editArt.artistName',
        description: 'editArt.description',
        width: 'editArt.width',
        height: 'editArt.height',
        quantity: 'editArt.quantity',
        category: 'editArt.category',
        price: 'editArt.price',
        medium: 'editArt.medium',
        subject: 'editArt.subject',
        materials: 'editArt.materials',
        style: 'editArt.style'
    }
    test.only('should render the Form', () => {
        const {container} = render(<Test editArt={editArt}/>)
        expect(container).toBeInTheDocument()
    });
})