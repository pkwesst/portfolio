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
  padding-top: 200px;
  padding-bottom: 210px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #f9f8f8;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-bottom: 120px;
  }
`;

export default AboutMe;
