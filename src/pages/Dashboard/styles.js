import styled, { keyframes, css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
        margin-right: 10px;
      }
    `}

  h1.loading {
    color: #fff;
    font-size: 30px;
  }
`;

export const Banner = styled.div`
  > h2 {
    text-align: center;
    font-family: 'Lobster Two', cursive;
    font-size: 100px;
    color: #fff;

    > span {
      padding: 0 25px;
      background: rgba(46, 73, 107, 0.9);
    }
  }
`;

export const ScrollBar = styled(PerfectScrollbar)`
  height: 100%;
  padding: 5px 20px;

  overflow: hidden;
`;

export const ListCars = styled.div`
  display: flex;
  flex-direction: column;

  li {
    list-style-type: none;
    & + li {
      border-top: 1px solid #aaa;
    }
  }
`;

export const Car = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;

  color: #fff;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: #bbb;
  }

  .car-left {
    text-align: left;
  }
  .car-right {
    text-align: right;
  }
  > div {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 20px;
    }
    .car-details > span {
      & + span {
        margin-left: 10px;
        padding-left: 15px;
        position: relative;
        &::before {
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: #fff;
          content: '';
          border-radius: 50%;
        }
      }
    }
  }
`;
