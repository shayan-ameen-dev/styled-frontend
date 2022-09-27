import styled from 'styled-components';

export const StyledProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 40%;
  }
`;

export const StyledProductInfo = styled.div`
  width: 40%;

  button {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
`;

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: white;
  font-weight: 500;
`;
