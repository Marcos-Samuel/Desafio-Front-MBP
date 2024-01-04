import { Button } from "../button/button";
import { Container } from "./styles";

type ControlsProps = {
  bimestre: string;
  onClick: (bimestre: string) => void;
};

const Controls: React.FC<ControlsProps> = ({ bimestre, onClick }) => {
  return (
    <Container>
      <span>{bimestre}</span>
      <Button title="Lançar Nota" onClick={() => onClick(bimestre)}></Button>
    </Container>
  );
};

export default Controls;
