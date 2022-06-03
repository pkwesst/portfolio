import styled from "styled-components";

const Main = () => {
  return (
    <MainStyle>
      <div className="black"></div>
      <div className="name">
        <div className="last-name">park</div>
        <div className="first-name">seohyun</div>
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background-color: #f9f8f8;
  text-transform: uppercase;

  .black {
    background-color: #000;
    width: 50%;
    height: 100vh;
  }

  .name {
    display: flex-column;
    font-family: "Khula", sans-serif;
    font-weight: 800;
    font-size: 170px;
    letter-spacing: -5px;
    display: flex;
  }

  .last-name {
    position: absolute;
    top: 23%;
    left: 25%;
    mix-blend-mode: difference;
    color: #fff;
    z-index: 2;
  }

  .first-name {
    position: absolute;
    mix-blend-mode: difference;
    color: #fff;
    top: 47%;
    left: 25%;
    z-index: 2;
  }
`;

export default Main;
