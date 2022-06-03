import styled from "styled-components";
import AboutMeItem from "./AboutmeItem";

const AboutMe = () => {
  return (
    <div>
      <AboutMeStyle>
        <AboutMeItem></AboutMeItem>
      </AboutMeStyle>
    </div>
  );
};

const AboutMeStyle = styled.div`
  padding: 150px 200px;
  background-color: #f9f8f8;
`;

export default AboutMe;
