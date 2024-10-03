import styled from "styled-components";
import { Heading5 } from "../../theme/typography/styles";
type SidebarProps = {
    select: boolean;
}
export const SidebarContainer = styled.aside`
    padding: 0 1rem;
`
export const SidebarHeader = styled.div``
export const SidebarTitle = styled.h3`
    text-align: center;
`
export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
`
export const SidebarTab = styled.div<SidebarProps>`
    display: flex;
    align-items: center;
    background-color: ${(p) => p.select ? p.theme.colors.primary[30] : 'transparent'};
    border-radius: 0.5rem;
    padding: 0.8rem 2rem;
    color: ${(p) => p.select ? 'white' : p.theme.colors.gray[30]};
    cursor: pointer;    
    transition: all 0.3s;
    small{
        ${Heading5}
        margin-left: 1rem;
    }
`