import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, MenuLeft, DataPage, SearchBar, DataCar } from './styles';

export default function DefaultLayout({
  page: { component: Page, props: pageProps },
}) {
  const [search, setSearch] = useState('');
  const [searchCar, setSearchCar] = useState('');

  useEffect(() => {
    setSearchCar(search);
  }, [search]);

  async function handleSubmit(e) {
    await e.preventDefault();

    setSearchCar(search);
  }

  function handleInput(e) {
    setSearch(e.target.value);
  }

  return (
    <Wrapper>
      <MenuLeft>
        <Link to="/">
          <h1>TradersClub</h1>
        </Link>
      </MenuLeft>

      <DataPage>
        <SearchBar onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleInput}
            placeholder="Pesquise por um veiculo"
          />
          <Link to="/new">Cadastrar</Link>
        </SearchBar>

        <DataCar>
          <Page searchCar={searchCar} {...pageProps} />
        </DataCar>
      </DataPage>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  page: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
  }).isRequired,
};
