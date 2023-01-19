import styled from "styled-components"

const colors = {
    red: '#E50914',
    white: '#FFFFFF'
}

export const Button = styled.button`
    width: fit-content;
    border: 1px solid #000;
    border-radius: 100px;
    font-weight: 400;
    transition: all 0.3s;

    &.size-m {
        padding: .5em 1.5em;
        font-size: .95em;
    }

    &.size-lg {
        padding: 0.8em 1.8em;
        font-size: 1em;
        letter-spacing: .03em;
    }



    &.btn-primary {
        background-color: ${colors.red};
        border-color: ${colors.red};
        color: ${colors.white};
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 20px 0px #e509148f;
    }
`