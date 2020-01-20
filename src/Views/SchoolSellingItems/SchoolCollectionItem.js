import React from 'react';
import { CollectionItemContainer } from '../SchoolsSoldItems/SchoolsSoldItemsStyle';

function SchoolCollectionItem({ art }) {
    console.log(art)
    return (
        <CollectionItemContainer>
            <div className="order-img">
                <img src={art.picture} alt="orders" />
            </div>
            <div className="order-section">
                <h3 id='title'>{art.name}</h3>
                <h3 id='artist'>{art.artistName} </h3>
                <h3 id='price'>${art.price}</h3>
                <h3 id='quantity'>Quantity remaining:{art.quantity}</h3>
            </div>

        </CollectionItemContainer>
    );
}

export default SchoolCollectionItem;
