import * as Styled from "./ButtonStyle"

export const Button = ({type, styleType, variant, size, text, ...props}) => {
    return (
        <Styled.Button type={type} className={`btn-${styleType} variant-${variant} size-${size}`} {...props}>{text}</Styled.Button>
    )
}