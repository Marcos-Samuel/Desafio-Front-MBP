import styled from 'styled-components';

type NotaProps = {
    nota : number
}

type DisciplinaProps = {
    diciplina : string
}

export const ContainerMain = styled.div`
display: flex;
align-items: start;
`

export const Container = styled.div<DisciplinaProps>`
  width: 9.8125rem;
  height: 9.125rem;
  border-radius: 20px;

  background-color: ${(props) =>
    props.diciplina === 'Biologia'
      ? props.theme['pink-100']
      : props.diciplina === 'Artes'
      ? props.theme['blue-100']
      : props.diciplina === 'Geografia'
      ? props.theme['orage-100'] 
        : props.theme['purple-100']};
`;

export const ContentText = styled.div`

    display: flex;
    flex-direction: column;
    gap:0.5rem;
    padding: 0.9rem 0.9rem 2.56rem 1.44rem;
    color: ${(props) => props.theme['white-200']};

    span:first-child {
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.125rem
    }
    span:last-child {
        font-size: 0.75rem;
        font-style: normal;
        line-height: 0.75rem;
    }


`
export const ContentNote = styled.div <NotaProps>`
  height: 1.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.9rem;
  color:  ${(props) => (props.nota < 6 ? props.theme['red-100'] : props.nota >= 6 && props.nota < 8 ?  props.theme['yellow-100'] : props.theme['green-100'])};
  background-color: rgba(15, 15, 15, 0.70) ;

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.875rem
  }
  
`;