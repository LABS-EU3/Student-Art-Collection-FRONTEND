import React from 'react';
import ErrorSvg from '../Assets/error.svg';

export default function ErrorPage() {
    return (
        <div style={{
            textAlign: 'center',
            marginTop: '1.5rem'
            }}>
             <img src={ErrorSvg} alt="page not found" />
        </div>
    )
}