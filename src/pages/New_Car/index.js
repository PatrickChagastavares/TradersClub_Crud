import React, { useState, useEffect } from 'react';
import { Input, Select } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';
import Form from '~/components/Form';

import api from '~/services/api';

export default function New_Car({ history }) {
  const [loading, setloading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadBrands() {
      const response = await api.get('brands');

      const data = response.data.brands.map(brand => ({
        id: brand.id,
        title: brand.name,
      }));

      setBrands(data);
      setloading(false);
    }
    loadBrands();
  }, []);

  async function handleCreate(data) {
    try {
      const brand = brands.find(b => String(b.id) === data.brand).title;

      const { title, model, year, color, km, price } = data;

      await api.post(`cars`, {
        car: {
          title,
          model,
          brand,
          color,
          km,
          price,
          year,
        },
      });

      history.push('/');
    } catch ({ errors }) {
      setError('Problema ao salvar o formulario');
    }
  }

  return (
    <Container loading={loading}>
      {!loading ? (
        <>
          <Form onSubmit={handleCreate}>
            {error && <span className="error">{error}</span>}
            <Input name="title" placeholder="Título do veículo" />
            <div>
              <Input name="model" placeholder="Modelo do veículo" />
              <Input name="year" placeholder="Ano de fabricação" />
            </div>
            <Select name="brand" options={brands} placeholder="Montadora" />
            <div>
              <Input name="color" placeholder="Cor do veículo" />
              <Input name="km" placeholder="Km rodados" />
              <Input name="price" placeholder="Preço do veiculo" />
            </div>

            <div className="button">
              <div className="left-button">
                <button onClick={() => history.push('/')} type="button">
                  Cancelar
                </button>
              </div>

              <div className="right-button">
                <button type="submit">Salvar</button>
              </div>
            </div>
          </Form>
        </>
      ) : (
        <div className="loading">
          <FaSpinner color="#fff" size={30} />
          <h1 className="loading">Carregando...</h1>
        </div>
      )}
    </Container>
  );
}
