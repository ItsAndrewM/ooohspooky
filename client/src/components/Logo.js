import styled from "styled-components";

const Logo = ({ imgSrc }) => {
  return (
    <Wrapper>
      <Img src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 50px;
  width: 100%;
`;

const Img = styled.img`
  object-fit: cover;
`;
export default Logo;
