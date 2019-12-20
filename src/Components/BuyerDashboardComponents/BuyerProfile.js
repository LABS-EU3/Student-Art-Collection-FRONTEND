import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/Actions/actionCreators'
import ProfilePhoto from '../../Assets/profile.jpg'

const ProfileContainer = styled.div`
width: 90%;
height: 90%;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto', sans-serif;


.top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    .photo-container {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-bottom: 0.7rem;

         img {
             max-width: 100%;
             height: auto;
             border-radius: 50%;
         }
    }

    span {
        color: #FD7135;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
            transition: opacity 0.2s ease-in-out;
        }
    }
}

    .middle-container {
        margin-top: 5rem;
        width: 90%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .data-row {
            width: 100%;
            height: 3rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                font-size: 1.1rem;

            }

            input {
                border: 0;
                text-align: right;
                width: 300px;   
                color: rgba(0,0,0,0.7)
            }
        }
    }

    .bottom-container {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        margin-top: 3rem;

        #cancel {
            width: 106px;
            height: 36px;
            background: #FFA439;
            border: none;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            transition: opacity 0.2s ease-in-out;

            &:focus {
                outline: none;
            }

            &:hover {
                opacity: 0.5;
                transition: opacity 0.2s ease-in-out;
            }
        }

        #save {
            width: 106px;
            height: 36px;
            background: rgba(49, 215, 21, 0.8);
            color: white;
            border: none;
            margin-left: 1rem;
            cursor: pointer;
            border-radius: 4px;
            transition: opacity 0.2s ease-in-out;

            &:focus {
                outline: none;
            }

            &:hover {
                opacity: 0.5;
                transition: opacity 0.2s ease-in-out;
            }
        }
    }
`
function BuyerProfile(props) {
    return (
        <ProfileContainer>
            <div className="top-container">
                <div className="photo-container">
                    <img src={ProfilePhoto} alt='Users profile' />
                </div>
                <span>Change</span>
            </div>
            <div className='middle-container'>
                <div className="data-row">
                    <h2>Email</h2>
                    <input value={'roryflintphoto@gmail.com'} />
                </div>
                <div className="data-row">
                    <h2>First Name</h2>
                    <input value={'Rory'} />
                </div>
                <div className="data-row">
                    <h2>Last Name</h2>
                    <input value={'Flint'} />
                </div>
                <div className="data-row">
                    <h2>Password</h2>
                    <input value={'*******'} />
                </div>
            </div>
            <div className="bottom-container">
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>

        </ProfileContainer>
    )
}

export default connect(state => state, actions)(BuyerProfile);