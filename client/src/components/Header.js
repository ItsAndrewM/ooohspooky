import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import logo_med from "../images/logo_med.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <Logo imgSrc={logo_med} />
      <Navbar />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid black;
`;
export default Header;
