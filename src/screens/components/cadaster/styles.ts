import styled from 'styled-components';
import colors from '../../../assets/UIkit/styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${colors.Main.background};
`;

export const Content = styled.div`
  flex: 1;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  padding: 10px;
`;

export const InputBox = styled.div`
  width: 45%;
`;

export const Label = styled.label`
  font-size: 13px;
`;
