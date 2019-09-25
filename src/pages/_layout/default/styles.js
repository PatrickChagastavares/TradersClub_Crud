import styled from 'styled-components';

import logo from '~/assets/img/logo-tc.png';
import car from '~/assets/img/car-wireframe.png';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  background-color: #1f2d40;
`;

export const MenuLeft = styled.aside`
  display: flex;
  justify-content: center;
  width: 300px;
  padding: 50px;
  background: #0e1823;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: min-content;
    transition: transform 0.3s;
    > h1 {
      display: inline-block;
      background: url(${logo}) no-repeat;
      width: 80px;
      height: 80px;
      text-indent: -999em;
    }
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const DataPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchBar = styled.form`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 30px 70px;
  background-color: #1a2433;

  input {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #1a2433;
    color: #fff;
    font-size: 18px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    width: 100px;
    border-radius: 5px;
    color: #1a2433;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const DataCar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 50px 50px;

  overflow: hidden;

  background: linear-gradient(rgb(31, 45, 64, 0.9), rgb(31, 45, 64, 0.9)),
    url(${car}) no-repeat center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;
