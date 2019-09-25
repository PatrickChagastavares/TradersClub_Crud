import React, { useState, useEffect, useMemo } from 'react';
import { Input, Select } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container, Loading } from './styles';
import Form from '~/components/Form';

import api from '~/services/api';

export default function Edit_Car({ history, match }) {
  const { id } = useMemo(() => match.params, [match.params]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [brand, setBrand] = useState(null);
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function loadCar() {
      try {
        const [brands, cars] = await Promise.all([
          api.get('brands'),
          api.get('cars', { params: { search: '' } }),
        ]);

        const carData = cars.data.cars.find(c => String(c.id) === String(id));

        if (!carData) {
          history.push('/404');
        }

        const brandData = brands.data.brands.map(data => ({
          id: data.id,
          title: data.name,
        }));

        setBrand(brandData);
        setCar(carData);

        setloading(false);
      } catch (err) {
        history.push('/500');
      } finally {
        setloading(false);
      }
    }

    loadCar();
  }, [history, id]);

  async function handleUpdate(data) {
    try {
      const brandsSelect = brand.find(b => String(b.id) === data.brand).title;

      const { title, model, year, color, km, price } = data;

      await api.post(`cars/${id}`, {
        car: {
          id,
          title,
          model,
          brandsSelect,
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

  async function handleRemove() {
    try {
      await api.delete(`cars/${id}`);

      history.push('/');
    } catch ({ errors }) {
      setError('Problema ao excluir formulario');
    }
  }

  return (
    <Container>
      {!loading ? (
        <>
          <Form initialData={car} onSubmit={handleUpdate}>
            {error && <span className="error">{error}</span>}
            <Input name="title" placeholder="Título do veículo" />
            <div>
              <Input name="model" placeholder="Modelo do veículo" />
              <Input name="year" placeholder="Ano de fabricação" />
            </div>
            <Select name="brand" options={brand} placeholder="Montadora" />
            <div>
              <Input name="color" placeholder="Cor do veículo" />
              <Input name="km" placeholder="Km rodados" />
              <Input name="price" placeholder="Preço do veiculo" />
            </div>

            <div className="button">
              <div className="left-button">
                <button onClick={handleRemove} type="button">
                  Remover
                </button>
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
        <Loading className="loading" loading={loading.toString()}>
          <FaSpinner color="#fff" size={30} />
          <h1 className="loading">Carregando...</h1>
        </Loading>
      )}
    </Container>
  );
}

Edit_Car.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
