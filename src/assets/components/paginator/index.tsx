import React from 'react';
import {PaginatorProps} from './index.type';
import {Container, Box, Page} from './styles';

const renderPages = ({pages, action, currentPage}: PaginatorProps) =>
  Array.from({length: pages}).map((_, i) => (
    <Box
      key={i.toString()}
      actived={currentPage === i}
      onClick={() => action(i)}>
      <Page actived={currentPage === i}>{i}</Page>
    </Box>
  ));

const Paginator: React.FC<PaginatorProps> = ({pages, action, currentPage}) => (
  <Container>{renderPages({pages, action, currentPage})}</Container>
);

export default Paginator;
