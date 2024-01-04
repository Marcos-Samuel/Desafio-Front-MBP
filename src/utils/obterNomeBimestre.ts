type BimestreNomes = {
    [key: string]: string;
  };
  

export const obterNomeBimestre = (bimestreString: string): string => {
    const numeroBimestre = parseInt(bimestreString.split(' ')[1], 10);

    const nomes: BimestreNomes = {
      1: 'PRIMEIRO',
      2: 'SEGUNDO',
      3: 'TERCEIRO',
      4: 'QUARTO',
    };
    return nomes[numeroBimestre] || 'Desconhecido';
  };
