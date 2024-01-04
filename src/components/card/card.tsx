import CustomSVG from '../CustomSVG/custonSvg';
import { Container, ContentText, ContentNote, ContainerMain } from './styles';
import trash from '../../assets/trash.svg';
import { formatarData } from '../../utils/formatarData';

export type ResultadoProps = {
    disciplina: string;
    criadoem: Date;
    atualizadoem: Date;
    nota: number;
    id: string;
     deleteDecipline: (id: string) => Promise<void>;
};

export default function Card({ disciplina, criadoem, atualizadoem, nota, id , deleteDecipline   }: ResultadoProps) {
    
      const dataExibicao = atualizadoem > criadoem ? atualizadoem : criadoem;
    
      const dataExibicaoFormatada =  formatarData(dataExibicao)
     
    return (
        <ContainerMain>
        <Container diciplina={disciplina}>
            <ContentText>
                <span>{disciplina }</span>
                <span>{ dataExibicaoFormatada  }</span>
            </ContentText>
            <ContentNote nota={nota} >

                <CustomSVG color={ nota < 6 ? '#FF5964' : nota >= 6 && nota < 8  ? '#FFFF99' : '#05FF00' } />
                
                <span>Nota: {nota}</span>
            </ContentNote> 
            </Container>
            <img src={trash} alt="icone de deletar"  onClick={ () => {deleteDecipline(id)}} />
        </ContainerMain>
  );
}
