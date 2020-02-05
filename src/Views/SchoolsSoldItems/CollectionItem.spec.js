import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import CollectionItem from './CollectionItem';

describe('<CollectionItem />', ()=>{
    test('should render the component', () =>{
        const {container} = render(<CollectionItem 
            art={{_id:1, updatedAt:97654, status:'pending', 
            transactionId: {productId:{price: 7}}}}
        />)
        expect(container).toBeInTheDocument()
    })
})