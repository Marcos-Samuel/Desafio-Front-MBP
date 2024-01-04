import React, { useState, useEffect } from "react";
import Card from "../components/card/card"; 
import { Container, ContainerCard, ContainerControl } from "./styles";
import Controls from "../components/controls/controls"; 
import api from "../services/data"; 
import { Bimestre, Resultados } from '../interface/types'
import ModalRegisterDiciplina from "../components/modalRegisterDiscipline/modalRegisterDiscipline";
import { Button } from "../components/button/button";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormData, schema } from "../features/help/search";
import { obterNomeBimestre } from "../utils/obterNomeBimestre";

const Home: React.FC = () => {

  const [results, setResults] = useState<{
    primeiro: Resultados[];
    segundo: Resultados[];
    terceiro: Resultados[];
    quarto: Resultados[];
  }>({
    primeiro: [],
    segundo: [],
    terceiro: [],
    quarto: [],
  });

  const [forceRender, setForceRender] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedDiciplina, setSelectedDiciplina] = useState<string[]>([]);
  const [selectBimestre, setSelectBimestre] = useState<string>('');
  
  const { register, handleSubmit, reset, formState: { errors} } = useForm<FormData>({
    resolver:zodResolver(schema) })

  function toggleModal(bimestre?: string) {
    if (bimestre) {
      setSelectBimestre(bimestre);
    }
    setModalOpen((prev) => !prev);
  }

  function filtrarPorBimestre(dados: Resultados[], bimestre: Bimestre) {
    return dados.filter(item => item.bimestre === bimestre);
  }

  const listResults = async () => {
    try {
      const response = await api.get(`/resultados`);
      setResults(prevState => ({
        ...prevState,
        primeiro: filtrarPorBimestre(response.data, Bimestre.PRIMEIRO),
        segundo: filtrarPorBimestre(response.data, Bimestre.SEGUNDO),
        terceiro: filtrarPorBimestre(response.data, Bimestre.TERCEIRO),
        quarto: filtrarPorBimestre(response.data, Bimestre.QUARTO),
      }));
    } catch (err) {
        console.error('Erro na exclusão:', err);
    }
  };

  const deleteDecipline = async (id: string) => {
    try {
      await api.delete(`/resultados/${id}`);
      setForceRender(true);
    } catch (err) {
      console.error('Erro na exclusão:', err);
    }
  };

  useEffect(() => {
      listResults();
      setForceRender(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceRender]);

  const order = ['Biologia', 'Artes', 'Geografia', 'Sociologia'];
  
const dadosPrimeiroBimestre = results.primeiro
  .filter((bimestre) => order.includes(bimestre.disciplina))
  .sort((a, b) => order.indexOf(a.disciplina) - order.indexOf(b.disciplina));

const dadosSegundoBimestre = results.segundo
  .filter((bimestre) => order.includes(bimestre.disciplina))
  .sort((a, b) => order.indexOf(a.disciplina) - order.indexOf(b.disciplina));

const dadosTerceiroBimestre = results.terceiro
  .filter((bimestre) => order.includes(bimestre.disciplina))
  .sort((a, b) => order.indexOf(a.disciplina) - order.indexOf(b.disciplina));

const dadosQuartoBimestre = results.quarto
  .filter((bimestre) => order.includes(bimestre.disciplina))
  .sort((a, b) => order.indexOf(a.disciplina) - order.indexOf(b.disciplina));

  const handleSelectDiciplina = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const item = e.target.value;
    const isAlreadySelected = selectedDiciplina.includes(item);

    if (isAlreadySelected) {
      setSelectedDiciplina([]);
    } else {
      setSelectedDiciplina([item]);
    }
  };

  const nomeBimestre = obterNomeBimestre(selectBimestre as string);
  const disciplinaString = selectedDiciplina.join(',').trim().replace(/,+$/, '');

  const onSubmit = async (data: FormData) => {
    try {
      await api.post(`/resultados`, {
        disciplina: disciplinaString,
        ...data,
        bimestre: nomeBimestre
      });
      setForceRender(true);
    } catch (err) {
      console.error('Erro na inclusão:', err);
    }

    reset();
    toggleModal('');
  };

  return (
        <Container>
          <ContainerControl>
            <Controls bimestre={'Bimestre 1'} onClick={() => toggleModal('Bimestre 1')} />
            <ContainerCard>
              {dadosPrimeiroBimestre.map(bimestre =>
                <Card
                  disciplina={bimestre.disciplina}
                  criadoem={bimestre.criadoem}
                  atualizadoem={bimestre.atualizadoem}
                  nota={bimestre.nota}
                  key={bimestre.id}
                  id={bimestre.id}
                  deleteDecipline={deleteDecipline}
                />
              )}
            </ContainerCard>
            <Controls bimestre={'Bimestre 2'} onClick={() => toggleModal('Bimestre 2')} />
            <ContainerCard>
              {dadosSegundoBimestre.map(bimestre =>
                <Card
                  disciplina={bimestre.disciplina}
                  criadoem={bimestre.criadoem}
                  atualizadoem={bimestre.atualizadoem}
                  nota={bimestre.nota}
                  key={bimestre.id}
                  id={bimestre.id}
                  deleteDecipline={deleteDecipline}
                />
              )}
            </ContainerCard>
            <Controls bimestre={'Bimestre 3'} onClick={() => toggleModal('Bimestre 3')} />
            <ContainerCard>
              {dadosTerceiroBimestre.map(bimestre =>
                <Card
                  disciplina={bimestre.disciplina}
                  criadoem={bimestre.criadoem}
                  atualizadoem={bimestre.atualizadoem}
                  nota={bimestre.nota}
                  key={bimestre.id}
                  id={bimestre.id}
                  deleteDecipline={deleteDecipline}
                />
              )}
            </ContainerCard>
            <Controls bimestre={'Bimestre 4'} onClick={() => toggleModal('Bimestre 4')} />
            <ContainerCard>
              {dadosQuartoBimestre.map(bimestre =>
                <Card
                  disciplina={bimestre.disciplina}
                  criadoem={bimestre.criadoem}
                  atualizadoem={bimestre.atualizadoem}
                  nota={bimestre.nota}
                  key={bimestre.id}
                  id={bimestre.id}
                  deleteDecipline={deleteDecipline}
                />
              )}
            </ContainerCard>
          </ContainerControl>
          <ModalRegisterDiciplina isOpen={modalOpen} onClose={toggleModal}>
            <h2>{selectBimestre}</h2>
            <p>Diciplina</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Button
                  title="Biologia"
                  width={'8.125rem'}
                  height={'3.3125rem'}
                  variant="BiologiaColor"
                  onClick={handleSelectDiciplina}
                  value='Biologia'
                />
                <Button
                  title="Artes"
                  width={'8.125rem'}
                  height={'3.3125rem'}
                  variant="ArtesColor"
                  onClick={handleSelectDiciplina}
                  value='Artes'
                />
                <Button
                  title="Geografia"
                  width={'8.125rem'}
                  height={'3.3125rem'}
                  variant="GeografiaColor"
                  onClick={handleSelectDiciplina}
                  value='Geografia'
                />
                <Button
                  title="Sociologia"
                  width={'8.125rem'}
                  height={'3.3125rem'}
                  variant="SociologiaColor"
                  onClick={handleSelectDiciplina}
                  value='Sociologia'
                />
              </div>
              <div>
                <p>Nota</p>
              </div>
              <div>
                <input
                  type='text'
                  placeholder="7.4"
                  
                  {...register('nota')}
                />
                {errors.nota && <span>{errors.nota.message}</span>}
              </div>
              <div>
                <Button
                  title="Confirmar"
                  width={'11.5rem'}
                  height={'3rem'}
                  type="submit"
                  variant="modalPrimary"
                />
              </div>
            </form>
          </ModalRegisterDiciplina>
        </Container>
  )
}

export default Home;