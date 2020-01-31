import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import places from 'places.js';
import { axiosWithBase } from "../../AxiosCustom";
import * as actions from "../../store/Actions/actionCreators";
import queryString from "query-string";
import jwt from "jsonwebtoken";

import Spinner from "../Spinner";

const ProfileContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;

  .top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    justify-content: center;

    input {
      width: 180px;
    }

    .photo-container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 0.7rem;
      background-color: ${props => props.theme.photoContainer};
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        color: ${props => props.theme.white};
        font-size: 5rem;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
      }
    }

    span {
      color: ${props => props.theme.buttonOrange};
      cursor: pointer;
      margin-top: 10px;

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
      border-bottom: 3px solid ${props => props.theme.veryLightGrey};
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.1rem;
      }

      .algolia-places{
        width: auto;  
      }
      input {
        border: 0;
        text-align: right;
        width: 300px;
        color: ${props => props.theme.lightGrey};

        &:focus {
          outline: none;
          color: ${props => props.theme.buttonOrange};
        }

        @media (max-width: 775px) {
          width: 50%;
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
      background: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.lightGrey};
      color: ${props => props.theme.black};
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
      background: ${props => props.theme.buttonOrange};
      color: ${props => props.theme.white};
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
`;

function Profile({ loggedInUser, setLoggedInUser, ...props }) {
    const [editedUserDetails, setEditedUserDetails] = useState({});
    const [waiting, setWaiting] = useState(true);
    const [photo, setPhoto] = useState(null);
    const [element, setElement] = useState(null);
    const [adreess, setAddress] = useState(null)    
    const [location, setLocation] = useState({
        name: null,
        administrative: null,
        country: null,
        latitude: null,
        longitude: null,
        postCode: null,
        location: {
            type: 'Point',
            coordinates: []
        }
    });

    const urlString = queryString.parse(props.location.search);

    const googleUserDetails = (x) => {
        const urlToken = x.token;
        const decodedUrlToken = jwt.decode(urlToken);
        const googleID = decodedUrlToken.subject;
        localStorage.setItem("authorization", urlToken);
        return googleID;
    }



    const submit = () => {
        const editedUser = {
            firstname: editedUserDetails.firstname,
            lastname: editedUserDetails.lastname,
            email: editedUserDetails.email,
            name: editedUserDetails.name,
            description: editedUserDetails.description,
            userLocation: location,
        };
        axiosWithBase()
            .patch(`/updateProfile/${loggedInUser.userId}`, editedUser)
            .then(() => {
                populateUserDetails(loggedInUser.userId);
                toast.success("Profile updated");
            })
            .catch(() => {
                toast.error("Error updating profile");
            });
    };

    const changeHandler = e => {
        setEditedUserDetails({
            ...editedUserDetails,
            [e.target.name]: e.target.value
        });
    };
    
    const cancel = () => {
        setEditedUserDetails(loggedInUser);
    };

    const photoChangeHandler = e => {
        setPhoto(e.target.files[0]);
    };

    const uploadProfilePhoto = () => {
        setWaiting(true);
        const formData = new FormData();
        formData.append("image", photo);

        axiosWithBase()
            .post(`/upload/${loggedInUser.userId}`, formData)
            .then(() => {
                populateUserDetails(loggedInUser.userId);
            })
            .catch(() => {
                setWaiting(false);
                toast.error("Error uploading your photo");
            });
    };

    const populateUserDetails = (id) => {
        axiosWithBase()
            .get(`/profile/${id}`)
            .then(res => {
                setLoggedInUser(res.data);
                setEditedUserDetails(res.data);
                setLocation(res.data.userLocation);
                if(res.data.userLocation) {
                    setAddress(`${res.data.userLocation.name} ${res.data.userLocation.administrative} ${res.data.userLocation.country}`)
                }
                setWaiting(false);
            })
            .catch(() => {
                setWaiting(false);
                toast.error("There was an error retrieving your information.");
            });
    };
    // let element
    let creteRefHandler = e => {
        setElement(e)
    } 
    // let placesAutocomplete
    useEffect(() => {
        if (loggedInUser.userId) {
            populateUserDetails(loggedInUser.userId);
        } else {
            const authId = googleUserDetails(urlString);
            populateUserDetails(authId);
        }
        if(!waiting && element)  {
                const placesAutocomplete = places({
                    appId: process.env.REACT_APP_APP_ID,
                    apiKey: process.env.REACT_APP_APP_KEY,
                    container: element
                });
                placesAutocomplete.on('change', (e)=>{
                    setLocation({...e.suggestion, 
                        postCode:e.suggestion.postcode, 
                        latitude:e.suggestion.latlng.lat, 
                        longitude:e.suggestion.latlng.lng,
                        location: {type: 'Point', coordinates: [e.suggestion.latlng.lng,e.suggestion.latlng.lat]}
                    });
                })
            }
    }, [element]);
    if (!waiting) {
        return (
            <>
                <ProfileContainer>
                    <div className="top-container">
                        <div className="photo-container">
                            {editedUserDetails.profile_picture ? (
                                <img src={editedUserDetails.profile_picture} alt="Your face!" />
                            ) : (
                                    <h1>
                                        {editedUserDetails.firstname
                                            ? editedUserDetails.firstname.charAt(0)
                                            : "S"}
                                    </h1>
                                )}
                        </div>
                        <input type="file" onChange={photoChangeHandler}></input>
                        {photo ? (
                            <span onClick={uploadProfilePhoto}>Upload Photo</span>
                        ) : null}
                    </div>
                    <div className="middle-container">
                        <div className="data-row">
                            <h2>Email</h2>
                            <input
                                onChange={changeHandler}
                                value={editedUserDetails.email}
                                name="email"
                            />
                        </div>
                        {"firstname" in editedUserDetails ? (
                            <div className="data-row">
                                <h2>First Name</h2>
                                <input
                                    onChange={changeHandler}
                                    value={editedUserDetails.firstname}
                                    name="firstname"
                                />
                            </div>
                        ) : null}
                        {"lastname" in editedUserDetails ? (
                            <div className="data-row">
                                <h2>Last Name</h2>
                                <input
                                    onChange={changeHandler}
                                    value={editedUserDetails.lastname}
                                    name="lastname"
                                />
                            </div>
                        ) : null}
                        {"email" in editedUserDetails ? (
                        <div className="data-row">
                            <h2>Billing Address</h2>
                            <input name="billingAddress" 
                                ref={creteRefHandler}
                                defaultValue={adreess}
                                id="address-input"
                            />
                        </div> ) : null}
                        {"name" in editedUserDetails ? (
                            <div className="data-row">
                                <h2>School Name</h2>
                                <input
                                    onChange={changeHandler}
                                    value={editedUserDetails.name}
                                    name="name"
                                />
                            </div>
                        ) : null}
                        {"description" in editedUserDetails ? (
                            <div className="data-row">
                                <h2>School Description</h2>
                                <input
                                    onChange={changeHandler}
                                    value={editedUserDetails.description}
                                    name="description"
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className="bottom-container">
                        <button onClick={cancel} id="cancel">
                            Cancel
                        </button>
                        <button onClick={submit} id="save">
                            Save
                       </button>
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
                        fontSize: "1.3rem",
                        textAlign: "center"
                    }}
                />
            </>
        );
    } else {
        return <Spinner />
    }
}

export default connect(state => state, actions)(Profile);
