import styled from 'styled-components';

export const StyledCartWrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const StyledCart = styled.div`
  background: #f1f1f1;
  overflow-y: auto;
  padding: 2rem 5rem;
  position: relative;
  width: 30%;
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0;

  img {
    width: 8rem;
  }
`;

export const StyledCardInfo = styled.div`
  width: 50%;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledEmptyCart = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }

  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const StyledCheckout = styled.div`
  button {
    background: var(--primary);
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
    padding: 1rem 2rem;
    width: 100%;
  }
`;
