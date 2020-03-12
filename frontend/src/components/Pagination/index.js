import React from 'react';

import { MdArrowForward, MdArrowBack } from 'react-icons/md';

import { PagesContainer, PageCounter } from './styles';

export default function Pagination({ page, maxPage, handleChangePage }) {
  return (
    <PagesContainer>
      {page !== 1 && (
        <MdArrowBack size={32} onClick={() => handleChangePage(page - 1)} />
      )}
      <PageCounter>
        <span>{page}</span>
      </PageCounter>
      {page !== maxPage && (
        <MdArrowForward size={32} onClick={() => handleChangePage(page + 1)} />
      )}
    </PagesContainer>
  );
}
