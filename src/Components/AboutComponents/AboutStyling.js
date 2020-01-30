import styled from "styled-components";
import AboutHeroImage1 from "../../Assets/world.jpeg";

export const StyledAboutHero = styled.div`
  width: 100%;
  height: 350px;
  background: url(${AboutHeroImage1});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};

  @media (max-width: 500px) {
    height: 250px;
  }

  h1 {
    font-size: 8rem;
    font-weight: 550;
    letter-spacing: 0.2rem;

    @media (max-width: 750px) {
      font-size: 6.5rem;
    }
    @media (max-width: 500px) {
      width: 80%;
      font-size: 5rem;
      text-align: center;
    }
  }
`;

export const StyledTeamContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  h1 {
    margin: 0 auto;
    font-size: 3rem;
    text-align: center;
    margin: 5rem 0 3rem 0;
  }

  p {
      margin: 0 auto;
      width: 60%;
      font-size: 1.8rem;
      line-height: 25px;
      color: ${props => props.theme.modalGrey};
      margin-top: 4rem;
      text-align: center;

      @media(max-width: 590px){
        width: 90%;
    }
  }

  .container {
    width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 700px){
        padding: 0;
    }

    .team-member {
      max-width: 18%;
      margin: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media(max-width: 700px){
          max-width: 36%;
      }

      @media(max-width: 490px){
        max-width: 80%;
    }


      a {
        margin-top: 1.5rem;
        text-decoration: none;
        font-size: 1.7rem;
        transition: opacity 0.2s ease-in-out;
        text-align: center;

        @media(max-width: 490px){
            font-size: 2rem;
        }

        :hover {
          opacity: 0.6;
          transition: opacity 0.2s ease-in-out;
        }
      }

      .img-cont {
        border-radius: 50%;
        width: 100%;

        img {
          max-width: 100%;
          height: auto;
          border-radius: 50%;
          transition: transform 0.3s ease-in-out;
          :hover {
            transform: rotate(180deg);
            transition: transform 0.5s ease-in-out;
            opacity: 1;
          }
        }
      }
    }
  }
`;
