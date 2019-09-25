import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container, Loading, Banner, ListCars, ScrollBar, Car } from './styles';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

export default function Dashboard({ history, searchCar }) {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (!searchCar) {
      setCars([]);
      return;
    }

    async function loadCars(search) {
      setLoading(true);

      try {
        const { data } = await api.get('cars', {
          params: {
            search,
          },
        });

        if (search.toString().length > 1) {
          const searchFilter = data.cars.filter(car =>
            car.title.toLowerCase().includes(searchCar.toLowerCase())
          );
          setCars(
            searchFilter.reduce((validCars, car) => {
              if (!car) {
                return validCars;
              }

              /**
               * Parse data
               */
              car.km = parseInt(car.km);
              car.price = parseInt(car.price);
              car.year = parseInt(car.year);

              /**
               * Add formatted data
               */
              car.KmFormatado = `${car.km
                .toLocaleString()
                .replace(',', '.')} KM`;
              car.formattedPrice = formatPrice(car.price);

              validCars.push(car);
              return validCars;
            }, [])
          );
        } else {
          setCars(
            data.cars.reduce((validCars, car) => {
              if (!car) {
                return validCars;
              }

              /**
               * Parse data
               */
              car.km = parseInt(car.km);
              car.price = parseInt(car.price);
              car.year = parseInt(car.year);

              /**
               * Add formatted data
               */
              car.KmFormatado = `${car.km
                .toLocaleString()
                .replace(',', '.')} KM`;
              car.formattedPrice = formatPrice(car.price);

              validCars.push(car);
              return validCars;
            }, [])
          );
        }
      } catch (error) {
        history.push('/500');
      }
    }

    loadCars(searchCar);
  }, [history, searchCar]);

  return (
    <Container>
      {loading ? (
        <>
          {cars.length > 0 ? (
            <ScrollBar>
              <ListCars>
                {cars.map(car => (
                  <li key={String(car.id)}>
                    <Link to={`/edit/${car.id}`}>
                      <Car>
                        <div className="car-left">
                          <strong className="car-title">{car.title}</strong>
                          <div className="car-details">
                            <span>{car.model}</span>
                            <span>{car.brand}</span>
                            <span>{car.KmFormatado}</span>
                          </div>
                        </div>
                        <div className="car-right">
                          <strong className="car-price">
                            {car.formattedPrice}
                          </strong>
                          <span className="car-year">{car.year}</span>
                        </div>
                      </Car>
                    </Link>
                  </li>
                ))}
              </ListCars>
            </ScrollBar>
          ) : (
            <Banner>
              <h2>
                Pesquisa de veículos do <span>TradrersClub</span>
              </h2>
            </Banner>
          )}
        </>
      ) : (
        <Loading loading={loading}>
          <FaSpinner color="#fff" size={30} />
          <h1 className="loading">Carregando...</h1>
        </Loading>
      )}
    </Container>
  );
}

Dashboard.propTypes = {
  searchCar: PropTypes.string,
};
