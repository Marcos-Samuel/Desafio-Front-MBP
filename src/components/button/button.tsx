import { ReactElement, useState } from "react";
import { Container, ContainerButton } from "./styles";

interface Props {
  disabled?: boolean;
  icon?: ReactElement;
  onClick?: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "pinkModal" | "blueModal" | "orangeModal" | "purpleModal";
  freeSize?: boolean;
  isLoading?: boolean;
  shadow?: boolean;
}

export function Button({
  disabled = false,
  onClick,
  title,
  type = "button",
  variant = "primary",
  freeSize = false,

  shadow = false,
}: Props) {

  const [focused, setFocused] = useState(false);

  return (
    <Container
      variant={variant}
      freeSize={freeSize}
      shadow={shadow}
    >
      <ContainerButton
        focused={focused}
        freeSize={freeSize}
        shadow={shadow}
        variant={variant}
        onFocus={()=> setFocused(true)}
        onBlur={()=> setFocused(false)}
        className={disabled ? "disabled" : "button"}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >

        {title}
      </ContainerButton>
    </Container>
  );
}
