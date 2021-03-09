import styled from "styled-components/native";

interface PeriodButtonTextProps {
  active: boolean;
}

export const Container = styled.View`
  padding-right: 5%;
`;

export const Text = styled.Text<PeriodButtonTextProps>`
  color: ${({ active }) => (active ? "#ffffff" : "#707070")};
  font-size: 16px;
  font-weight: 600;

  width: 100%;
`;

export const Line = styled.View`
  margin-top: 10px;

  height: 2px;
  width: 100%;

  align-self: flex-start;

  background-color: #1db954;
`;
