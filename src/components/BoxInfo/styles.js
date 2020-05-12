import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 360px;
  text-align: center !important;
  padding: 20px;
  border-radius: 5px;
  border-top: 6px solid transparent;
  cursor: pointer;
  overflow: hidden;
  opacity: 30%;
  transition: 0.4s;

  &:hover,
  &:focus {
    opacity: 100%;
    color: #2c2c51;
    background: #f9f9fc;
    border-top: 6px solid blue;
    box-shadow: 1px 1px 20px 5px #dddddd;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.span`
  color: #2c2c51;
  font-size: 18px;
  font-weight: bold;
`;
