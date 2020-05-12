import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 1px 1px 5px 0 #000000;
  width: 120px;
  height: 120px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
