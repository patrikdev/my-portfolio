import styled from "styled-components";
import IMG from "../../assets/img/person.png";

export const Container = styled.div`
  display: flex;
  height: 600px;
  background: #020230;
`;

export const Col = styled.div`
  flex: 1;
  /* border: 1px solid #ddd; */
`;

export const ContainerImage = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
