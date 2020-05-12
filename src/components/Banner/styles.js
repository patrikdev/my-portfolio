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

export const ContainerTitle = styled.div`
  display: flex;
  height: 100%;
  margin-top: 150px;
  align-items: top;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 70px;
  color: #ffffff;
  font-weight: 700;
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;
  background: url('${IMG}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
