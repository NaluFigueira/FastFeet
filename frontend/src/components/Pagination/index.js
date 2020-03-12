import React from 'react';

import PropTypes from 'prop-types';

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

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};
