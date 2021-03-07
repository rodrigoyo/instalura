import styled, { css } from 'styled-components';

const ButtonGhost = css`
    color: #FB7B6B;
    background: transparent;
`;

const ButtonDefault = css`
    background-color: ${(props) => props.theme.colors.primary.main.color};
    color: ${(props) => props.theme.colors.primary.main.contrastText};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${(props) => (props.ghost) ? ButtonGhost : ButtonDefault}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;