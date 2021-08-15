import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';

export const Container = styled.div`
  width: 100%;
  background: ${colors.Main.white};
`;

export const InputField = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid ${colors.Main.divider};
`;
