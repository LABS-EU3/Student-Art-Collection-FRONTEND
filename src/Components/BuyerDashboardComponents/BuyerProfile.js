import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {axiosWithBase} from '../../AxiosCustom'
import * as actions from '../../store/Actions/actionCreators'

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
    const [userDetails, setUserDetails] = useState(props.userData);

    const submit = () => {
        console.log(userDetails);
    }

    const changeHandler = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const cancel = () => {
        setUserDetails(props.userData);
    }

    const letter = props.userData.firstName.charAt(0);

    useEffect(() => {
        const id = '5dfcc4c54e32032c2ffa069c';
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWRmY2M0YzU0ZTMyMDMyYzJmZmEwNjljIiwiaWF0IjoxNTc2ODQ2NjQ3LCJleHAiOjE1NzcyNzg2NDd9.n3lxhs98N8qfk8aDo7FQ7Xvico1LHPzmtvRmBkkLjR8"
        axiosWithBase.get(`${id}`, {headers: {'authorization': token}})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <ProfileContainer>
            <div className="top-container">
                <div className="photo-container">
                    {/* <img src={userDetails.profilePhoto} alt='Users profile' /> */}
                    <h1>{letter}</h1>
                </div>
            </div>
            <div className='middle-container'>
                <div className="data-row">
                    <h2>Email</h2>
                    <input onChange={changeHandler} value={userDetails.email} name="email" />
                </div>
                <div className="data-row">
                    <h2>First Name</h2>
                    <input onChange={changeHandler} value={userDetails.firstName} name="firstName" />
                </div>
                <div className="data-row">
                    <h2>Last Name</h2>
                    <input onChange={changeHandler} value={userDetails.lastName} name="lastName" />
                </div>
            </div>
            <div className="bottom-container">
                <button onClick={cancel} id="cancel">Cancel</button>
                <button onClick={submit} id="save">Save</button>
            </div>
        </ProfileContainer>
    )
}

export default connect(state => state, actions)(BuyerProfile);