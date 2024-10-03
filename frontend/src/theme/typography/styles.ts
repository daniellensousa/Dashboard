import { css } from 'styled-components';
import { LARGE_SIZE, SMALL_SIZE } from '../globalStyle';

export const Heading1 = css`
    font-family: ${p=>p.theme.typography.heading1.fontFamily};
    font-weight: ${p => p.theme.typography.heading1.fontWeight};
    font-size: ${p => p.theme.typography.heading1.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading1.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading1.fontSize.large};        
    }
`;
export const Heading2 = css`
    font-family: ${p=>p.theme.typography.heading2.fontFamily};
    font-weight: ${p => p.theme.typography.heading2.fontWeight};
    font-size: ${p => p.theme.typography.heading2.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading2.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading2.fontSize.large};        
    }
`;
export const Heading3 = css`
    font-family: ${p=>p.theme.typography.heading3.fontFamily};
    font-weight: ${p => p.theme.typography.heading3.fontWeight};
    font-size: ${p => p.theme.typography.heading3.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading3.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading3.fontSize.large};        
    }
`;
export const Heading4 = css`
    font-family: ${p=>p.theme.typography.heading4.fontFamily};
    font-weight: ${p => p.theme.typography.heading4.fontWeight};
    font-size: ${p => p.theme.typography.heading4.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading4.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading4.fontSize.large};        
    }
`;
export const Heading5 = css`
    font-family: ${p=>p.theme.typography.heading5.fontFamily};
    font-weight: ${p => p.theme.typography.heading5.fontWeight};
    font-size: ${p => p.theme.typography.heading5.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading5.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading5.fontSize.large};        
    }
`;
export const Heading6 = css`
    font-family: ${p=>p.theme.typography.heading6.fontFamily};
    font-weight: ${p => p.theme.typography.heading6.fontWeight};
    font-size: ${p => p.theme.typography.heading6.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.heading6.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.heading6.fontSize.large};        
    }
`;

export const Medium1 = css`
    font-family: ${p=>p.theme.typography.medium1.fontFamily};
    font-weight: ${p => p.theme.typography.medium1.fontWeight};
    font-size: ${p => p.theme.typography.medium1.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.medium1.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.medium1.fontSize.large};        
    }
`
export const Medium2 = css`
    font-family: ${p=>p.theme.typography.medium2.fontFamily};
    font-weight: ${p => p.theme.typography.medium2.fontWeight};
    font-size: ${p => p.theme.typography.medium2.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.medium2.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.medium2.fontSize.large};        
    }
`
export const Medium3 = css`
    font-family: ${p=>p.theme.typography.medium3.fontFamily};
    font-weight: ${p => p.theme.typography.medium3.fontWeight};
    font-size: ${p => p.theme.typography.medium3.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.medium3.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.medium3.fontSize.large};        
    }
`
export const Medium4 = css`
    font-family: ${p=>p.theme.typography.medium4.fontFamily};
    font-weight: ${p => p.theme.typography.medium4.fontWeight};
    font-size: ${p => p.theme.typography.medium4.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.medium4.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.medium4.fontSize.large};        
    }
`
export const Medium5 = css`
    font-family: ${p=>p.theme.typography.medium5.fontFamily};
    font-weight: ${p => p.theme.typography.medium5.fontWeight};
    font-size: ${p => p.theme.typography.medium5.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.medium5.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.medium5.fontSize.large};        
    }
`
export const Paragraph1 = css`
    font-family: ${p=>p.theme.typography.paragraph1.fontFamily};
    font-weight: ${p => p.theme.typography.paragraph1.fontWeight};
    font-size: ${p => p.theme.typography.paragraph1.fontSize.default};
    line-height: ${p => p.theme.typography.paragraph1.lineHeight};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.paragraph1.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.paragraph1.fontSize.large};        
    }
`
export const Regular1 = css`
    font-family: ${p=>p.theme.typography.regular1.fontFamily};
    font-weight: ${p => p.theme.typography.regular1.fontWeight};
    font-size: ${p => p.theme.typography.regular1.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.regular1.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.regular1.fontSize.large};        
    }
`
export const Regular2 = css`
    font-family: ${p=>p.theme.typography.regular2.fontFamily};
    font-weight: ${p => p.theme.typography.regular2.fontWeight};
    font-size: ${p => p.theme.typography.regular2.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.regular2.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.regular2.fontSize.large};        
    }
`
export const Regular3 = css`
    font-family: ${p=>p.theme.typography.regular3.fontFamily};
    font-weight: ${p => p.theme.typography.regular3.fontWeight};
    font-size: ${p => p.theme.typography.regular3.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.regular3.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.regular3.fontSize.large};        
    }
`
export const Regular4 = css`
    font-family: ${p=>p.theme.typography.regular4.fontFamily};
    font-weight: ${p => p.theme.typography.regular4.fontWeight};
    font-size: ${p => p.theme.typography.regular4.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.regular4.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.regular4.fontSize.large};        
    }
`
export const Regular5 = css`
    font-family: ${p=>p.theme.typography.regular5.fontFamily};
    font-weight: ${p => p.theme.typography.regular5.fontWeight};
    font-size: ${p => p.theme.typography.regular5.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.regular5.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.regular5.fontSize.large};        
    }
`
export const Italic1 = css`
    font-family: ${p=>p.theme.typography.italic1.fontFamily};
    font-weight: ${p => p.theme.typography.italic1.fontWeight};
    font-size: ${p => p.theme.typography.italic1.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.italic1.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.italic1.fontSize.large};        
    }
`
export const Italic2 = css`
    font-family: ${p=>p.theme.typography.italic2.fontFamily};
    font-weight: ${p => p.theme.typography.italic2.fontWeight};
    font-size: ${p => p.theme.typography.italic2.fontSize.default};
    @media (max-width:${SMALL_SIZE}) {
        font-size: ${p => p.theme.typography.italic2.fontSize.small};
    }

    @media(min-width:${LARGE_SIZE}){
        font-size: ${p => p.theme.typography.italic2.fontSize.large};        
    }
`
