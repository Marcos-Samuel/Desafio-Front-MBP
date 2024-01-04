import styled from 'styled-components';


export const ModalContainer = styled.div`
  width: 42.375rem;
  height: 23.6875rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['background-color']};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;

  padding-left: 70px;



  h2 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem;
    padding-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem;
  }

  form {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 320px) {
     justify-content: center;
     gap: 0.5rem;
  }
    
    div:last-child {
      display: flex;
      align-self: flex-end;

      @media screen and (max-width: 320px) {
      align-self: flex-start;
  }
    } 
  }

  input {
    height: 3rem;
    padding: 0.75rem 1rem;
    width: 6.3rem ;
    gap: 0.625rem;
    background-color: ${(props) => props.theme['background-color']};
    display: flex;
    border-radius: 0.75rem;
    justify-content: center;
    align-items: center;
 
    align-self: stretch;
    color: #6D6D6D;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
  }

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.75rem; 
    color: ${(props) => props.theme['red-100']};
  }

  div:nth-of-type(1) {
    display: flex;
    gap: 0.6rem;

    @media screen and (max-width: 768px) {

      flex-wrap: wrap;
     }
    
  }

  @media screen and (max-width: 768px) {
    width: 24.75rem;
    height: 28.31rem;
  
   }

   @media screen and (max-width: 380px) {
    width: 16.75rem;
    height: 28.31rem;
  }
  
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;