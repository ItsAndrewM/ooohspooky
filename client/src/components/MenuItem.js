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
  text-align: center;
  border: 1px solid black;
`;

const Span = styled.span`
  width: 100%;
`;

const NavItem = styled(NavLink)``;
export default MenuItem;
