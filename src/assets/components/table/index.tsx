import React from 'react';
import {TableProps} from './index.type';
import {Table, TableRow, Th, HeaderBox, Divider} from './styles';

const renderHeader = (headers: Array<string>) =>
  headers?.map(title => <Th>{title}</Th>);

// const renderRows = (rows: any) =>
//   rows?.map(row => <td>{}</td>)

const TableComponent: React.FC<TableProps> = ({tableHeaders, renderRows}) => {
  return (
    <Table>
      <TableRow width={100}>{renderHeader(tableHeaders)}</TableRow>
      {renderRows}
    </Table>
  );
};

export default TableComponent;
