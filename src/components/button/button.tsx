/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useState } from "react";
import { Container, ContainerButton } from "./styles";
import plus from '../../assets/plus.svg'
import { EventProps } from "../../interface/types";
interface Props {
  icon?: ReactElement;
  onClick?: (() => void) | ((arg: string) => void) | ((e: EventProps) => void) | any;
  title?: string;
  type?: "button" | "submit" 
  variant?: "primary" | "BiologiaColor" | "ArtesColor" | "GeografiaColor" | "SociologiaColor" | 'modalPrimary';
  width?: string | undefined
  height?: string | undefined;
  value?: string
}

export function Button({
  onClick,
  title,
  type = "button",
  variant = "primary",
  width,
  height,
  value
}: Props) {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container
      variant={variant}
      width={width}
      height={height}
    >
      <ContainerButton
        variant={variant}
        onClick={onClick}
        type={type}
        value={value}
      >
        {title === 'Lançar Nota'  && isMobile ? '' : title} 
        {title === 'Lançar Nota'  && <img src={plus} alt="" />}
      </ContainerButton>
    </Container>
  );
}
