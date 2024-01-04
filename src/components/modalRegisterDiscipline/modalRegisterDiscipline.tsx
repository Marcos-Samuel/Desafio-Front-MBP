
import { CloseButton, ModalContainer, Overlay } from './styles';

type ModalProps = {
  isOpen: boolean;
  onClose: (bimestre: string) => void;
  children: React.ReactNode; 
};

const ModalRegisterDiciplina: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <>
        <Overlay onClick={() => onClose('')} />
        <ModalContainer>
          <CloseButton onClick={() => onClose('')}>X</CloseButton>
          {children}
        </ModalContainer>
      </>
    );
  };

export default ModalRegisterDiciplina;