import styled from 'styled-components';

export const Container = styled.div`
  
    width: 157px;
    height: 146px;
    border-radius: 20px;

   

    background-color: ${props => props.theme['pink-100']};

   
`;

export const ContentText = styled.div`

    display: flex;
    flex-direction: column;
    gap:0.5rem;
    padding: 0.9rem 0.9rem 2.56rem 1.44rem;


`

export const ContentNote = styled.div`

    height: 1.875rem;

    display: flex;
    align-items: center;

    gap: 0.5rem;
    padding-left: 0.9rem;

    background-color: rgba(15, 15, 15, 0.70);;
`