import styled from "styled-components"
import PerspectiveAlphaWebsiteLarge from "../../assets/images/perspective_alpha_website_large.jpg"

export const Container = styled.div`
    width: auto;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0, #0000008c 60%, rgba(0,0,0,.8)), url(${PerspectiveAlphaWebsiteLarge.src});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 700px;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75em 3.5em;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`

export const LangSelector = styled.select`
    background: url("data:image/svg+xml,<svg height='15px' width='15px' viewBox='0 0 24 24' fill='%23ffffff' xmlns='http://www.w3.org/2000/svg'><path d='m4.594 8.912 6.553 7.646a1.126 1.126 0 0 0 1.708 0l6.552-7.646c.625-.73.107-1.857-.854-1.857H5.447c-.961 0-1.48 1.127-.853 1.857Z'></path></svg>") no-repeat right 10px center;
    background-color: #00000085;
    border: 1px solid #FFFFFF;
    border-radius: 100px;
    padding: .5em 2em .5em 1.5em;
    color: #FFFFFF;
    font-size: .95em;

    &:hover {
        cursor: pointer;
    }
`

export const CardText = styled.div`
    padding: 8em 3.5em;
`

export const CardTitle = styled.div`
    color: #FFFFFF;
    font-size: 4.5em;
    font-weight: 600;
`

export const CardSubTitle = styled.div`
    color: #dbdbdb;
    font-size: 2.2em;
    font-weight: 400;
    padding: .3em 0 1.2em 0;
`