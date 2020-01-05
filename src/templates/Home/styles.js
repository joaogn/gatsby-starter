import styled from "styled-components"
import Img from "gatsby-image"

export const ImgContainer = styled(Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
`

export const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .banner {
    width: 100%;
    height: 100%;
    background: url(${props => props.banner});
    background-position-x: 50%;
    background-position-y: 2%;
    background-size: 300px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h1 {
      margin-top: 7%;
      color: #000;
      font-size: 50px;
    }
    h2 {
      margin-top: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
    .posts {
      margin-top: 5%;
      align-self: flex-end;
      justify-self: flex-end;
      width: 100%;
      display: flex;
      flex-direction: column;
      h2 {
        padding-left: 10%;
        color: #000;
        align-self: flex-start;
        margin-top: 20px;
      }

      .postsContent {
        padding: 0 0 0 5%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        a {
          margin-left: 5%;
          border-radius: 10px;
          margin-top: 20px;
          background-color: #fff;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          width: 25%;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          p {
            align-self: center;
            margin-top: 5px;
            color: #000;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner {
      .posts {
        .postsContent {
          a {
            width: 40%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .banner {
      .posts {
        .postsContent {
          a {
            width: 90%;
          }
        }
      }
    }
  }
`
