import styled from "styled-components";

export const Container = styled.div`
  color: #ffffff;
`;

export const ContainerTitle = styled.div`
  padding: 30px 0;
`;

export const ContainerNumbers = styled.div``;

export const ContainerIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 6%;
`;

export const ContainerLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 91%;
  line-height: 22px;
`;

export const Icon = styled.div`
  width: 22px;
  height: 22px;
  background: url('${(props) => props.icon}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Row = styled.div``;

export const Title = styled.span`
  font-size: 24px;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #677294;
  line-height: 22px;
`;
