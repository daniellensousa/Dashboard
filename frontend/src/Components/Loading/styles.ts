import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[60]};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  img {
    width: 100%;
    animation: rotate 4s linear infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
