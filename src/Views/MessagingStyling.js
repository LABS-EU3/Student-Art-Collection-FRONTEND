import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const StyledNavigationContainer = styled.nav`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-end;

    a {
        font-size: 2rem;
        width: 14rem;
        text-align: center;
        padding-bottom: 0.5rem;
        color: rgba(0,0,0,0.5);
        border-bottom: 1px solid white;

        @media(max-width: 500px){
          font-size: 1.4rem;
        }

        :hover {
            color: rgba(0,0,0,1);
        }
    }
    .active {
        color: black;
        border-bottom: 1px solid black;

    }
`;

export const StyledMessageContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  overflow-y: scroll;

  .nothing {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;

      @media(max-width: 500px){
        font-size: 1.4rem;
        height: 30vh;
      }
  }

  .titles {
    width: 95%;
    height: 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;

        h2{
            font-weight: 580;
            font-size: 1.3rem;
            width: 30%;

            @media(max-width: 590px){
              font-size: 1rem;
            }
        }

        h3 {
            width: 10%;
        }
  }

`;
