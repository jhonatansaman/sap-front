import React from 'react';
import { Container, BannerSetic, LoginContent, Content, LoginBox, BannerBox } from './styles'

const Login: React.FC = () => (
    <Container>

        <Content>
            <BannerBox>
                <BannerSetic />
            </BannerBox>
            <LoginBox>
                <LoginContent />
            </LoginBox>
        </Content>

    </Container>
)


export default Login;
