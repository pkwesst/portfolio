import styled from "styled-components";
import {
  SiJavascript,
  SiCss3,
  SiPython,
  SiJava,
  SiFirebase,
} from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaSass,
  FaGithubSquare,
  FaReact,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
const AboutMeItem = () => {
  return (
    <AboutMeLayoutStyle id="3">
      <h2>Experience</h2>
      <div className="container">
        <div className="item">
          <div className="icon-js">
            <SiJavascript />
          </div>
        </div>
        <div className="item">
          <div className="icon-github">
            <FaGithubSquare />
          </div>
        </div>
        <div className="item">
          <FaReact />
        </div>
        <div className="item">
          <FaHtml5 />
        </div>
        <div className="item">
          <SiCss3 />
        </div>
        <div className="item">
          <BsFillBootstrapFill />
        </div>
        <div className="item">
          <FaGitAlt />
        </div>
        <div className="item">
          <SiPython />
        </div>
        <div className="item">
          <SiJava />
        </div>
        <div className="item">
          <SiFirebase />
        </div>
        <div className="item">
          <DiGoogleCloudPlatform />
        </div>
        <div className="item">
          <FaSass />
        </div>
      </div>
    </AboutMeLayoutStyle>
  );
};

const AboutMeLayoutStyle = styled.div`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  line-height: 1.8;

  .item {
    width: 120px;
    height: 70px;
    background-color: #fff;
    padding: 40px;
    border-radius: 7px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    font-size: 50px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 20px;
    place-items: center;
  }

  .aboutme-wrap {
    display: flex;
    justify-content: center;
  }

  .aboutme {
    width: 67vw;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    border-radius: 5px;
    margin: 40px;

    .contact {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
`;
export default AboutMeItem;
