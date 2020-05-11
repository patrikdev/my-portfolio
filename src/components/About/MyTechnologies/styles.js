import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 7px;
`;

export const Image = styled.div`
  height: 120px;
  width: 120px;
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
`;
