import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${(props) => props.icon}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
