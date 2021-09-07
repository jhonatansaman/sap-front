import React from 'react';
import {Container, Content} from './styles';
import ReactLoading from 'react-loading';
import colors from '../../UIkit/styles/colors';

const LoadingModal: React.FC = () => (
  <Container>
    <Content>
      <ReactLoading type="spin" color={colors.Primary.darkBlue} />
    </Content>
  </Container>
);

export default LoadingModal;
