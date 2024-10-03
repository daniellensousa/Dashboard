import styled from "styled-components";
import { Heading2, Heading5, Medium5, Regular5 } from "../../theme/typography/styles";
type color = {
  color: string;
  iconColor: string;
};
export const DashboardContainer = styled.main``;
export const DashContent = styled.div`
  background-color: white;
  padding: 1rem;
  box-shadow: 0px 6px 7px 0px #f1f1f1;
  border-radius: 0.5rem;
`;
export const DashContentChart = styled(DashContent)`
  width: 40%;
`;
export const DashSales = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DashTitle = styled.div`
  margin: 1rem 0;
  h5 {
    ${Heading2}
    color: ${({ theme }) => theme.colors.primary[10]};
  }
  small {
    color: ${({ theme }) => theme.colors.neutral[70]};
  }
`;
export const DashGraph = styled.div`
  button {
    padding: 0.5rem;
    background-color: transparent;
    border: ${({ theme }) => theme.borders.regularGray};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.primary[10]};
    ${Heading5}
  }
  svg {
    margin-left: 0.5rem;
  }
`;
export const DashBoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export const DashSection = styled.section`
  display: flex;
  justify-content: space-between;
`

export const TargetVsReality = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  h5{
    ${Heading5}
    color: ${({ theme }) => theme.colors.green[50]};
  }
`
export const TargetIcon = styled.div<color>`
  background-color: ${({ color }) => color};
  border-radius: 5px;
  padding: 1rem;
  svg{
    color: ${({ iconColor }) => iconColor};
  }
`
export const TargetContentGrid = styled.div`
  p{
    ${Heading5}
    color: ${({ theme }) => theme.colors.primary[10]};
  }
  small{
    ${Regular5}
    color: ${({ theme }) => theme.colors.neutral[70]};
  }
`
export const TargetContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export const DashContentSales  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`
export const ChartTitle = styled.div<color>`
display: flex;
align-items: center;
margin: 0 1rem;
  div{
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
  }
  p{
    ${Medium5}
    color: ${({ theme }) => theme.colors.primary[10]};
  }
`