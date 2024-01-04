import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.62rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 70%;
    padding-right: 2rem;
   }

   
   @media screen and (max-width: 690px) {
    width: 80%;
    
   }
   

   @media screen and (max-width: 560px) {
    width: 100%;
    
   }
   @media screen and (max-width: 380px) {
    padding-right: 3rem;
    justify-content: space-around;
  }
  
`;
