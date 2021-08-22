import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';

export const Container = styled.div`
  height: 60px;
  border-bottom: 0.5px solid;
  border-color: ${colors.Main.divider};
  padding: 0px 18px;
  align-items: center;
  display: flex;
  background-color: ${colors.Main.white};
`;

export const Text = styled.div`
  font-size: 14px;
`;
