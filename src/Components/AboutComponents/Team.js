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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consequat semper
        viverra nam libero justo laoreet sit. At urna condimentum mattis
        pellentesque id nibh. Leo integer malesuada nunc vel risus commodo
        viverra maecenas accumsan. Ut venenatis tellus in metus vulputate. A
        erat nam at lectus urna. Congue mauris rhoncus aenean vel elit. Diam
        quis enim lobortis scelerisque. Augue mauris augue neque gravida in
        fermentum et sollicitudin ac. Congue nisi vitae suscipit tellus mauris a
        diam. Nec feugiat in fermentum posuere urna nec tincidunt praesent
        semper. Mi proin sed libero enim. Integer feugiat scelerisque varius
        morbi enim nunc faucibus. Amet consectetur adipiscing elit pellentesque.
        Lacus sed turpis tincidunt id aliquet risus. Felis eget nunc lobortis
        mattis aliquam faucibus.
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
