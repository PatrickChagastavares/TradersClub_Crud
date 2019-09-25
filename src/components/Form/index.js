import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export default styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }

  input {
    margin-top: 20px;
    padding: 10px;
    color: #fff;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #fff;
    &:placeholder {
      color: #aaa;
    }
  }

  select {
    margin-top: 20px;
    padding: 5px;
    font-size: 16px;
    color: #fff;
    background: transparent;
    border-radius: 4px;
    border: 1px solid #fff;
    > option {
      background: #1a2433;
    }
  }
  button {
    padding: 10px 25px;
    & + button {
      margin-left: 10px;
    }
  }

  > div.button {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;

    > div.left-button {
      > button {
        padding: 5px 20px;
        font-weight: bold;
        font-size: 20px;
        border: 0;
        border-radius: 5px;

        color: #fff;
        border: 2px solid #fff;
        background: transparent;
      }
    }

    > div.right-button {
      > button {
        padding: 5px 20px;
        font-weight: bold;
        font-size: 20px;
        border: 0;
        border-radius: 5px;

        color: #111;
        border: 2px solid #fff;
        background: #fff;
      }
    }
  }
`;
