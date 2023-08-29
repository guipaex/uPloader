import styled, { keyframes, css } from "styled-components";
import "../../styles/variables.scss";

interface SnackBarProps {
  status: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SnackBar = styled.div<SnackBarProps>`
  position: absolute;
  bottom: 6.2%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 1.5rem;
  width: 75%;
  line-height: 1.5rem;
  background-color: #219653;
  color: white;
  font-size: 0.7rem;
  border-radius: 0.35rem;
  padding: 0.2rem 1rem;
  margin: 0.5rem auto;
  visibility: ${(props) => (props.status ? "visible" : "hidden")};
  ${(props) =>
    props.status
      ? css`
          animation: ${fadeIn} 0.5s forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s forwards;
        `}
`;

export default SnackBar;
