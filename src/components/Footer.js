import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <a href='mailto:"pkwesst@gmail.com'>
          <MdOutlineMail />
        </a>
        <a href="https://pkwesst.github.io" target="_blank">
          <FaBloggerB />
        </a>
        <a href="https://github.com/pkwesst" target="_blank">
          <SiGithub />
        </a>
      </FooterStyle>
    </div>
  );
};

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  height: 80px;
  font-size: 23px;

  a {
    padding: 20px;
    color: #f9f8f8;
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }
`;

export default Footer;
