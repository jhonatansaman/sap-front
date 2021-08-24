import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';

export const Container = styled.div`
  padding: 20px;
  background: ${colors.Main.white};
  border-radius: 8px;
  /* border: 1px solid ${colors.Main.divider}; */
  filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));
`;
