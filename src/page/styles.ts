import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const ContainerControl = styled.div`

 display: flex;
 flex-direction: column;
 gap: 1.46rem;
 
 @media screen and (max-width: 768px) { 
  padding: 3.875rem 1.0625rem 8.6875rem 2.125rem;

  justify-content: center;
  align-items: center;
  }

`;

export const ContainerCard = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;

gap: 4.75rem;

@media screen and (max-width: 981px) { 

  gap: 1.75rem;

}

@media screen and (max-width: 768px) { 
  gap: 4.75rem;
  justify-content: center;
}

@media screen and (max-width: 510px) { 
  gap: 0.75rem;
}


@media screen and (max-width: 320px) {
    justify-content: center;
  }
`;

