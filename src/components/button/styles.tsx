import styled from "styled-components";

interface IProps {
  variant?: "primary" | 'modalPrimary' | "BiologiaColor" | "ArtesColor" | "GeografiaColor" | "SociologiaColor";
  height?: string,
  width?: string
}

export const Container = styled.div<IProps>`

display: flex;
justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;
`;
export const ContainerButton = styled.button<IProps>`
width: ${(props) => props.variant !== 'primary' ? '8.125rem'  : '11.4375rem' };
height: ${(props) => props.variant !== 'primary' ?  '3.3125rem' : '2.3125rem' };

border-radius: 0.75rem;
box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.08);



display: flex;
justify-content: space-evenly;
align-items: center;
font-weight: bold;

background-color: ${(props) =>
  props.variant === "BiologiaColor" ? props.theme["pink-opacity-200"]
  : props.variant === "SociologiaColor" ? props.theme["purple-opacity-200"]
  : props.variant === "ArtesColor" ? props.theme["blue-opacity-200"]
  : props.variant === "GeografiaColor" ? props.theme["orage-opacity-200"]
  : props.theme["yellow-100"]};
    
&:focus {
outline: none;
background-color: ${(props) =>
  props.variant === "BiologiaColor" ? props.theme["pink-100"]
  : props.variant === "SociologiaColor" ? props.theme["purple-100"]
  : props.variant === "ArtesColor" ? props.theme["blue-100"]
  : props.variant === "GeografiaColor" ? props.theme["orage-100"]
  : props.theme["yellow-100"]} }

@media screen and (max-width: 768px) {
  width: ${(props) => props.variant === 'primary' ? '3.625rem' : '8.125rem'};
  height: ${(props) => props.variant === 'primary' ?  '2.3125rem' : '3.3125rem' };
}

@media screen and (max-width: 320px) {
  
  height: ${(props) => props.variant === 'primary' ? '2.3125rem' : '2.3125rem' };
}
`;
