import { Container, ContentText, ContentNote } from './styles';
import chart from '../../assets/chart.svg'

export default function Card  ()  {
    return (
        <Container>
            <ContentText>
                <span>Biologia</span>
                <span>28/04/2022</span>
            </ContentText>
            <ContentNote>
                <img src={chart} alt="" />
                <span>Nota: 5</span>
            </ContentNote> 
        </Container>
  );
}
