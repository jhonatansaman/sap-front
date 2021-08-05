import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 0.5;
  background: white;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  background: #f3f6f8;
  justify-content: center;
  padding: 20px 0px;
`;

export const ContainerCardOption = styled.div`
  height: 200px;
  width: 250px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: gray;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  color: gray;
  text-align: center;
`;

export const DetailsBox = styled.div`
  padding: 0px 16px;
`;

export const LogoBox = styled.div`
  padding: 50px 50px;
  width: 300px;
  height: 150px;
`;

export const LogoImage = styled.img`
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  align-items: center;
  justify-content: center;
`;

export const TitleMain = styled.p`
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: #00478f;
  margin-bottom: 15px;
`;

export const SubtitleMain = styled.p`
  font-size: 22px;
  padding: 0;
  margin: 0;
`;
