import styled from "styled-components";

export const Container = styled.div``;

export const ContainerIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8%;
`;

export const ContainerLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 91%;
  line-height: 22px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background: url('${(props) => props.icon}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #677294;
  line-height: 24px;

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
