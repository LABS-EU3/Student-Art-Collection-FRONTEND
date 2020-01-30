import React from "react";
import { StyledTeamContainer } from "./AboutStyling";
import Rory from "../../Assets/team/rory.jpeg";
import Vincent from "../../Assets/team/vincent.jpeg";
import Pere from "../../Assets/team/pere.jpeg";
import Brenda from "../../Assets/team/brenda.jpeg";
import James from "../../Assets/team/james.png";
import Tobi from "../../Assets/team/tobi.jpeg";
import Petar from "../../Assets/team/petar.jpeg";

function Team() {
  return (
    <StyledTeamContainer>
      <p>
        Artfunder was designed, developed and deployed by a small team of Lambda
        students from all corners of the globe. Our mission was to provide a
        platform for art schools and art departments to generate much needed
        income from the very products they already produce: artwork. In a vastly
        competitive and exponentially growing education environment, the Arts
        often get left behind due to the lack of obvious career path and earning
        potential. Nonetheless, these schools provide an essential space for
        emerging creatives and future creators to hone their skills;
        underfunding in the 21st Century is almost unthinkable. By bringing our
        technical skills and passion for the arts together, we have developed a
        space for creative incubators of the future to ensure their funding and
        future is safe.
      </p>
      <h1>Meet the team</h1>
      <div className="container">
        <div className="team-member">
          <div className="img-cont">
            <img src={Vincent} alt="Nmeregini Vincent" />
          </div>
          <a href="#">Nmeregini Vincent</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={Rory} alt="Ruairidh Flint" />
          </div>
          <a href="#">Ruairidh Flint</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={Brenda} alt="Brenda Joshua" />
          </div>
          <a href="#">Brenda Joshua</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={Pere} alt="Pere Sola Claver" />
          </div>
          <a href="#">Pere Sola Claver</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={Petar} alt="Petar Scepanovic" />
          </div>
          <a href="#">Petar Scepanovic</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={James} alt="James Grantham" />
          </div>
          <a href="#">James Grantham</a>
        </div>
        <div className="team-member">
          <div className="img-cont">
            <img src={Tobi} alt="Oloruntobi Awoderu" />
          </div>
          <a href="#">Oloruntobi Awoderu</a>
        </div>
      </div>
    </StyledTeamContainer>
  );
}

export default Team;
