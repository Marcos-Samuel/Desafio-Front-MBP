import styled from "styled-components";

interface IProps {
  variant: "primary" | "pinkModal" | "blueModal" | "orangeModal" | "purpleModal";
  freeSize: boolean;
  focused?: boolean;
  shadow: boolean;
}

export const Container = styled.div<IProps>`
  
display: flex;
width: 11.4375rem;
height: 2.3125rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;

  
`;
export const ContainerButton = styled.button<IProps>`
width: 100%;
height: 100%;
border-radius: 0.75rem;
background-color:  #E9FF1A;
box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.08);

`;
