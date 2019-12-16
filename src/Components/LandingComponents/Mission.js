import React from 'react'
import styled from 'styled-components'
import SchoolPhoto from '../../Assets/schoolart.jpeg'

const MissionContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    padding-top: 4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 4rem;
    border-top: 1px solid rgba(0,0,0,0.2);

    @media(max-width: 940px) {
        flex-direction: column;
    }

    .mission-right {
        width: 39%;
        height: 100%;
        margin: 2rem 0;

        img {
            max-width: 100%;
            height: auto;
        }

        @media(max-width: 940px) {
            width: 90%;
        }
    }
    .mission-left {
        width: 40%;
        height: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h2 {
            font-family: 'Julius Sans One', sans-serif;
            font-size: 3.1rem;
            margin: 1rem 0 1.5rem 0;
            align-self: flex-start;
        }

        p {
            font-family: 'Roboto', sans-serif;  
            font-size: 1.5rem;
            line-height: 1.5;
        }

        button {
            background: none;
            color: rgba(0,0,0,1);
            font-size: 1.5rem;
            width: 12rem;
            height: 3rem;
            border-radius: 3px;
            opacity: 0.6;
            transition: opacity 0.3s ease-in-out;
            cursor: pointer;
            margin-top: 2rem;
    
            &:hover {
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
            }
        }

        @media(max-width: 940px) {
            width: 90%;

            h2 {
                text-align: center
            }
        }
    }
`
function Mission() {
    return (
        <MissionContainer>
            <div className="mission-left">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. In est ante in nibh mauris cursus mattis molestie. Morbi non arcu risus quis varius quam. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Magna fringilla urna porttitor rhoncus dolor purus non enim. Non sodales neque sodales ut etiam. Curabitur vitae nunc sed velit dignissim. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Egestas diam in arcu cursus. Euismod </p>
                <button>Learn More</button>
            </div>
            <div className="mission-right">
                <img src={SchoolPhoto} alt='School art supplies' />
            </div>
        </MissionContainer>
    )
}

export default Mission
