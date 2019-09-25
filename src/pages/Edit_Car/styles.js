import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  span.error {
    margin-left: -20px;
    color: #fff;
  }

  div.loading {
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

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
