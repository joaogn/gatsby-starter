import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .banner {
    width: 512px;
    height: 512px;
    background: url(${props => props.banner});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h1 {
      margin-top: 100px;
      color: #000;
      font-size: 50px;
    }
    h2 {
      margin-top: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
    .posts {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      h3 {
        margin-left: 20px;
        align-self: flex-start;
        margin-top: 20px;
      }
      a {
        margin-left: 20px;
        align-self: flex-start;
        color: #000;
        margin-right: 5px;
      }
    }
  }
`
