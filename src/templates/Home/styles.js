import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 512px;
    height: 512px;
    background: url(${props => props.banner});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #000;
    font-size: 50px;
  }
  h2 {
    color: #888;
  }
`
