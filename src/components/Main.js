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

    @media screen and (max-width: 1200px) {
      font-size: 120px;
    }

    @media screen and (max-width: 768px) {
      font-size: 50px;
    }
  }

  .last-name {
    position: absolute;
    top: 23%;
    left: 32%;
    mix-blend-mode: difference;
    color: #fff;
    z-index: 2;
    @media screen and (max-width: 1200px) {
      top: 3em;
      left: 3em;
    }

    @media screen and (max-width: 768px) {
      top: 5.5em;
      left: 2.5em;
    }
  }

  .first-name {
    position: absolute;
    mix-blend-mode: difference;
    color: #fff;
    top: 47%;
    left: 32%;
    z-index: 2;
    @media screen and (max-width: 1200px) {
      top: 4.5em;
      left: 3em;
    }

    @media screen and (max-width: 768px) {
      top: 7em;
      left: 2.5em;
    }
  }
`;

export default Main;
