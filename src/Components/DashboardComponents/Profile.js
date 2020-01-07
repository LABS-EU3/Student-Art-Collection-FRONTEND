import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import { axiosWithBase } from '../../AxiosCustom'
import * as actions from '../../store/Actions/actionCreators'

import Spinner from '../Spinner'

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
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 0.7rem;
        background-color: rgba(56,56,188,0.3);
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: white;
            font-size: 5rem;
        }

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
                color: rgba(0,0,0,0.7);

                &:focus {
                    outline: none;
                    color: orange;
                }
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
            font-size: 1.2rem;

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
            font-size: 1.2rem;

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
function Profile({ loggedInUser, setUserDetails, userDetails}) {
    const [editedUserDetails, setEditedUserDetails] = useState();
    const [waiting, setWaiting] = useState(true);

    const submit = () => {
        const { _id } = loggedInUser;
        const editedUser = {
            firstname: editedUserDetails.firstname,
            lastname: editedUserDetails.lastname,
            email: editedUserDetails.email,
            name: editedUserDetails.name,
            description: editedUserDetails.description
        }

        axiosWithBase.patch(`/updateProfile/${_id}`, editedUser)
            .then(() => {
                toast.success('Profile updated');
                setUserDetails(editedUser);
            })
            .catch(() => {
                toast.error('Error updating profile');
            })
    }

    const changeHandler = (e) => {
        setEditedUserDetails({ ...editedUserDetails, [e.target.name]: e.target.value })
    }

    const cancel = () => {
        setEditedUserDetails(userDetails)
    }

    useEffect(() => {
        const { _id } = loggedInUser;
        const token = localStorage.getItem('authorization');

        axiosWithBase.get(`${_id}`, { headers: { 'authorization': token } })
            .then((res) => {
                setUserDetails(res.data)
                setEditedUserDetails(res.data)
                setWaiting(false)
            })
            .catch(() => {
                toast.error("There was an error retrieving your information.")
            })
    }, [loggedInUser, setUserDetails])

    if (!waiting) {
        return (
            <>
                <ProfileContainer>
                    <div className="top-container">
                        <div className="photo-container">
                            <h1>{userDetails.firstname ? userDetails.firstname.charAt(0) : userDetails.name.charAt(0)}</h1>
                        </div>
                    </div>
                    <div className='middle-container'>
                        <div className="data-row">
                            <h2>Email</h2>
                            <input onChange={changeHandler} value={editedUserDetails.email} name="email" />
                        </div>
                        {'firstname' in editedUserDetails ?
                            <div className="data-row">
                                <h2>First Name</h2>
                                <input onChange={changeHandler} value={editedUserDetails.firstname} name="firstname" />
                            </div>
                            : null
                        }
                        {'lastname' in editedUserDetails ?
                            <div className="data-row">
                                <h2>Last Name</h2>
                                <input onChange={changeHandler} value={editedUserDetails.lastname} name="lastname" />
                            </div>
                            : null
                        }
                        {'name' in editedUserDetails ?
                            <div className="data-row">
                                <h2>School Name</h2>
                                <input onChange={changeHandler} value={editedUserDetails.name} name="name" />
                            </div>
                            : null
                        }
                        {'description' in editedUserDetails ?
                            < div className="data-row">
                                <h2>School Description</h2>
                                <input onChange={changeHandler} value={editedUserDetails.description} name="description" />
                            </div>
                            : null
                        }
                    </div>
                    <div className="bottom-container">
                        <button onClick={cancel} id="cancel">Cancel</button>
                        <button onClick={submit} id="save">Save</button>
                    </div>
                </ProfileContainer>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    closeButton={false}
                    style={{
                        'fontSize': '1.3rem',
                        'textAlign': 'center'
                    }}
                />
            </>
        )
    }

    else {
        return (
            <Spinner />
        )
    }
}

export default connect(state => state, actions)(Profile);
