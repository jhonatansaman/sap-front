import styled, {keyframes} from 'styled-components';
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

export const Select = styled.select`
  width: 100%;
  height: 44px;
  background: ${colors.Main.white};
  border: 1px solid ${colors.Main.divider};
`;

export const PaginatorBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
`;

export const SelectedBox = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  padding: 0px 10px;
`;

const animation = keyframes`
  0% {
        transform: rotate(-1deg);
        animation-timing-function: ease-in;
    }
    50% {
        transform: rotate(1.5deg);
        animation-timing-function: ease-out;
    }
`;

export const CardDiscipline = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${colors.Main.divider};
  margin: 2px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  transform-origin: 50% 10%;
  animation-delay: -0.75s;
  animation-duration: 0.25s;
  animation-name: ${animation};
  animation-iteration-count: infinite;
`;

export const CodeDiscipline = styled.p`
  font-family: Poppins;
  font-size: 12px;
  text-align: center;
  margin-right: 10px;
  color: ${colors.Primary.darkBlue};
`;

export const Close = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.Primary.darkBlue};
  right: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CloseButton = styled.p`
  font-size: 12px;
  font-family: Poppins;
  color: ${colors.Main.white};
`;
