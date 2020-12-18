import styled from "styled-components";

export const Li = styled.li`
  display: inline-block;
  margin: 0 15px;

  a {
    color: ${(props) => (props.color ? props.color : "#333333")} !important;
  }
`;
