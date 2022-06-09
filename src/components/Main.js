import styled from "styled-components";

const Main = () => {
  return (
    <MainStyle>
      <Black />
      <Name>
        <Lastname>park</Lastname>
        <FirstName>seohyun</FirstName>
      </Name>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  background-color: #f9f8f8;
  text-transform: uppercase;
  position: relative;
`;

const Black = styled.div`
  background-color: #000;
  width: 50%;
  height: 100vh;
`;

const Lastname = styled.div`
  mix-blend-mode: difference;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 25%;
  left: 32%;
  @media screen and (max-width: 1200px) {
    top: 2.5rem;
    left: 3rem;
  }
  @media screen and (max-width: 768px) {
    top: 5rem;
    left: 2rem;
  }
`;

const Name = styled.div`
  font-family: "Khula", sans-serif;
  font-weight: 800;
  font-size: 170px;
  letter-spacing: -5px;
  @media screen and (max-width: 1200px) {
    font-size: 120px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const FirstName = styled.div`
  mix-blend-mode: difference;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 45%;
  left: 32%;

  @media screen and (max-width: 1200px) {
    top: 4rem;
    left: 3rem;
  }
  @media screen and (max-width: 768px) {
    top: 6.5rem;
    left: 2rem;
  }
`;

export default Main;
