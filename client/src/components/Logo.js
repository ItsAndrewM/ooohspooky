import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = ({ imgSrc, url }) => {
  return (
    <Wrapper>
      <NavItem to={url}>
        <Img src={imgSrc} />
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(0.95);
  }
`;

const NavItem = styled(NavLink)`
  height: 100%;
  width: 100%;
`;
export default Logo;
