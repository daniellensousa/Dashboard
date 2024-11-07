import styled from "styled-components";
import { Heading2, Heading5, Regular5 } from "../../theme/typography/styles";

export const HeaderTitle = styled.h1`
  ${Heading2}
  color: ${(p) => p.theme.colors.primary[10]};
`;

export const Container = styled.div``;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 0rem 3rem;
`;

export const Select = styled.select`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: ${(p) => p.theme.colors.primary[10]};
  ${Heading5}
`;

export const Search = styled.div`
  background-color: ${(p) => p.theme.colors.primary[20]};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  input {
    background-color: transparent;
    border: none;
  }
  svg {
    color: ${(p) => p.theme.colors.primary[30]};
    margin-right: 0.5rem;
  }
`;

export const Notification = styled.div`
  border-radius: 5px;
  margin-right: 1rem;
  background-color: ${(p) => p.theme.colors.gray[10]};
  svg {
    width: 25px;
    height: 25px;
    color: ${(p) => p.theme.colors.pink[20]};
  }
`;

export const Admin = styled.div`
  display: flex;
  align-items: center;
  svg:nth-child(2) {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }
`;

export const AdminContent = styled.div`
  p {
    ${Heading5}
  }
  small {
    ${Regular5}
  }
  color: ${(p) => p.theme.colors.primary[10]};
`;
