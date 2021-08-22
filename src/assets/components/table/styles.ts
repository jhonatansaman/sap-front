import styled from 'styled-components';
import colors from '../../UIkit/styles/colors';
import {UIModifiers} from './index.type';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${colors.Main.divider};
`;

export const TableRow = styled.tr<UIModifiers>`
  height: 48px;
  width: ${props => props.width}%;
  border-bottom: 1px solid #dddddd;
`;

export const Th = styled.th`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: ${colors.Primary.darkBlue};
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${colors.Main.divider};
`;

export const TD = styled.td<UIModifiers>`
  width: ${props => props.width};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: ${colors.Primary.table_gray};
`;
