import styled from "styled-components";
import { menuItems } from "../data/menuItems";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <Wrapper>
      <Ul>
        {menuItems.map((menuItem, index) => {
          return (
            <MenuItem key={index} title={menuItem.title} url={menuItem.url} />
          );
        })}
      </Ul>
    </Wrapper>
  );
};

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  flex-wrap: nowrap;
`;
export default Navbar;
