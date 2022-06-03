import styled from "styled-components";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="1" spy={true} smooth={true}>
        <span>Project</span>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <span className="developer">Front-end Engineer</span>
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
  // position: sticky;
  // top: 0;
  background-color: #000;
  height: 80px;
  // backdrop-filter: blur(30px);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  color: #f9f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 20px;

    :hover {
      cursor: pointer;
    }
  }
`;
export default Header;
