import styled from "styled-components";
import AboutMeItem from "./AboutmeItem";

const AboutMe = () => {
  return (
    <div id="3">
      <AboutMeStyle>
        <AboutMeItem></AboutMeItem>
      </AboutMeStyle>
    </div>
  );
};

const AboutMeStyle = styled.div`
  padding: 230px;
  background-color: #f9f8f8;
`;

export default AboutMe;
