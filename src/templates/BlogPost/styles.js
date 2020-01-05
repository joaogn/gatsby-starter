import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImgContainer = styled(Img)`
  margin-top: 20px;
  align-self: center;
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
export const Container = styled.div`
  background: #eee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 5%;
    align-self: center;
    color: #222;
    font-size: 35px;
  }
  img {
    margin-top: 20px;
    align-self: center;
    width: 50%;
  }
  div {
    margin-top: 20px;
    margin-left: 5%;
    h3 {
      color: #666;
    }
  }
  @media only screen and (max-width: 1024px) {
    img {
      width: 60%;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 80%;
    }
  }
`;
