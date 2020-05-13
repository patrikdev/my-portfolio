import styled from "styled-components";
import DigitalInnovation from "../../../../assets/img/digital.png";

export const Container = styled.div`
  height: 150px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('${DigitalInnovation}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
