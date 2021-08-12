import React from 'react';
import {Container, Th, Td, Tr} from './styles';

const Head = ({keys, head}: {keys: any; head: any}) => {
  const tableHead = head || {};
  return (
    <thead>
      <Tr>
        {keys.map((key: any) => (
          <Th key={key}>{tableHead[key] || key}</Th>
        ))}
      </Tr>
    </thead>
  );
};

const Row = ({record}: {record: any}) => {
  const keys = Object.keys(record);
  return (
    <Tr key={record.id}>
      {keys.map(key => (
        <Td key={key}>{record[key]}</Td>
      ))}
    </Tr>
  );
};

const Table = ({data, head}: {data: any; head: any}) => {
  const keys = Object.keys(data[0]);

  return (
    <Container>
      <Head keys={keys} head={head} />

      <tbody>
        {data.map((record: any) => (
          <Row record={record}></Row>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
