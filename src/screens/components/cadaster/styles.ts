import styled from 'styled-components';
import colors from '../../../assets/UIkit/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${colors.Main.background};
`;

export const Content = styled.div`
  flex: 1;
  padding: 30px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  width: 40%;
`;

export const Label = styled.label``;
