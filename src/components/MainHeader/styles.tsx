import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/resources/background.jpg");
  background-color: #eff1f4;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: table;

  div {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    h1 {
      color: #FFFFFF;
      font-size: 3.5em;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
    }

    h4 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 1.5em;
      font-family: 'Montserrat', sans-serif;
      font-weight: 100;
    }
  }
`;
