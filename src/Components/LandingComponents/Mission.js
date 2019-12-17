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
                <p>A metal cast of a balloon dog recently sold for $91,000,000. A Banksy print could set you back a further $3,000,000. Meanwhile, art programs in schools around the world are chronically underfunded with many stating that they have adjusted their curriculum specifically to avoid using materials that need to be replaced.</p><p>
                Artfunder was set up to kill two birds with one stone: to get art into your living room without needing to remortgage, and to provide precious capital to schools for buying supplies, organise trips and helping to  cultivate the next generation of creatives at the source.</p><p>
                We provide a platform for schools to sell students art and put 100% of the profit directly back into the arts programs. </p>
                <button>Learn More</button>
            </div>
            <div className="mission-right">
                <img src={SchoolPhoto} alt='School art supplies' />
            </div>
        </MissionContainer>
    )
}

export default Mission
