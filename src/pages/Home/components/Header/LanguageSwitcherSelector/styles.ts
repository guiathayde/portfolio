import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .dropdown {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
  }

  &:hover {
    .dropdown {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;

      button {
        padding: 5px 0;
        margin: 0 8px;

        &:hover {
          width: 45px;
          height: 45px;

          img {
            width: 45px;
            height: 45px;
          }
        }
      }
    }
  }
`;
