import styled from "styled-components";
import Header from "./Header";

const Main = () => {
  return (
    <MainStyle>
      <div className="black"></div>
      <div className="name">
        <div className="first-name">PARK</div>
        <div className="last-name">SEOHYUN</div>
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background-color: #f9f8f8;

  .black {
    background-color: #000;
    width: 50%;
    height: 100vh;
  }

  .name {
    display: flex-column;
    //   font-family: "Passion One", cursive;
    font-family: "Khula", sans-serif;
    font-weight: 800;
    font-size: 170px;
    //   word-spacing: 20px;
    letter-spacing: -5px;
    display: flex;
  }

  .first-name {
    position: absolute;
    top: 23%;
    left: 30%;
    mix-blend-mode: difference;
    color: #fff;
  }

  .last-name {
    position: absolute;
    mix-blend-mode: difference;
    color: #fff;
    left: 30%;
    top: 47%;
  }
`;

export default Main;
