import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from '../../Assets/profile.jpg'

const ProfileContainer = styled.div`
width: 90%;
height: 90%;
border: 1px solid red;
display: flex;
flex-direction: column;
align-items: center;

    .photo-container {
        width: 110px;
        height: 110px;
        border-radius: 50%;

         img {
             max-width: 100%;
             height: auto;
             border-radius: 50%;
         }
    }
`
function BuyerProfile() {
    return (
        <ProfileContainer>
            <div className="photo-container">
                <img src={ProfilePhoto} alt='Users profile' />
            </div>
        </ProfileContainer>
    )
}

export default BuyerProfile;