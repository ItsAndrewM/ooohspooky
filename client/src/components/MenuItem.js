import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuItem = ({ title, url }) => {
  return (
    <Li>
      <NavItem to={url}>
        <Span>{title}</Span>
      </NavItem>
    </Li>
  );
};

const Li = styled.li`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
  line-height: 1.5em;
`;

const Span = styled.span`
  width: 100%;
  height: 100%;
`;

const NavItem = styled(NavLink)``;
export default MenuItem;
