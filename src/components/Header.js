import styled from "styled-components";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="1" spy={true} smooth={true}>
        <span>Project</span>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <span className="developer">Frontend Engineer</span>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <span>About</span>
      </Link>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #000;
  height: 90px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0;
  color: #f9f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  span {
    padding: 30px;

    :hover {
      cursor: pointer;
    }
  }
`;
export default Header;
