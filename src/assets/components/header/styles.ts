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
  color: ${colors.Primary.darkBlue};
  font-family: Poppins;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TextSearch = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: ${colors.Primary.gray};
  margin-left: 15px;
`;

export const Input = styled.input`
  border: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.01em;
  width: 200px;
  color: ${colors.Primary.gray};
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: ${colors.Primary.gray};
  }
  margin-left: 15px;
`;
