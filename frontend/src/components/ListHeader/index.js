import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';
import colors from '~/styles/colors';
import { SearchBar } from './styles';
import Button from '~/components/Button';
import history from '~/services/history';

export default function ListHeader({
  title,
  searchFunction,
  searchInputPlaceholder,
  registerRoute,
}) {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <SearchBar>
          <MdSearch size={18} color={colors.body} />
          <input
            type="text"
            onChange={searchFunction}
            placeholder={searchInputPlaceholder}
          />
        </SearchBar>
        <Button type="button" onClick={() => history.push(registerRoute)}>
          <MdAdd size={24} style={{ marginRight: 10 }} />
          Cadastrar
        </Button>
      </div>
    </>
  );
}

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
  searchInputPlaceholder: PropTypes.string.isRequired,
  registerRoute: PropTypes.string.isRequired,
};
