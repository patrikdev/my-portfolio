import styled from "styled-components";

export const Container = styled.div``;

export const ContainerTitle = styled.div`
  padding: 30px 0;
`;

export const ContainerLabel = styled.div``;

export const ContainerIcons = styled.div`
  padding: 15px 0;
`;

export const ContainerIcon = styled.div`
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #ffffff;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #677294;
  line-height: 24px;
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  background: url('${(props) => props.icon}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
