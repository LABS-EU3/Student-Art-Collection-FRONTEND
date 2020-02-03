import React from "react";
import { StyledTeamContainer } from "./AboutStyling";
import teamData from "./TeamData";

function Team() {
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const randomTeamList = shuffle(teamData);
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
        {randomTeamList.map(member => {
          return (
            <TeamMember
              name={member.name}
              url={member.url}
              photo={member.photo}
              key={member.name}
            />
          );
        })}
      </div>
    </StyledTeamContainer>
  );
}

export default Team;

function TeamMember(props) {
  return (
    <div className="team-member">
      <div className="img-cont">
        <img src={props.photo} alt={props.name} />
      </div>
      <a href={props.url}target="_blank" rel="noopener noreferrer">{props.name}</a>
    </div>
  );
}
