import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  width: 5%;
  justify-content: center;
  align-items: center;
`;
