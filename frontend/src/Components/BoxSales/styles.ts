import styled from "styled-components";
import { Heading2, Heading3, Regular4, Regular5 } from "../../theme/typography/styles";
type colorBox = {
    color: string;
  };
export const DashBox = styled.div<colorBox>`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(p) => p.color};
  h5 {
    ${Heading3}
    color: ${({ theme }) => theme.colors.primary[40]};
  }
  p {
    color: ${({ theme }) => theme.colors.neutral[70]};
    ${Regular4}
  }
  small {
    ${Regular5}
    color: ${({ theme }) => theme.colors.primary[50]};
  }
`;
export const DashBoxIcon = styled.div<colorBox>`
  background-color: ${(p) => p.color};
  border-radius: 50%;
  width: 30%;
  padding: 8px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  svg {
    color: white;
    width: 16px;
    height: 16px;
  }
`;
