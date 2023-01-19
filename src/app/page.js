'use client'
import { createGlobalStyle } from "styled-components"
import Intro from './Views/Intro/IntroView';

export default function Main() {
    return <><GlobalStyle /><Intro /></>
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 100;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format("woff")
    }
    
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 300;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff) format("woff")
    }
    
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 400;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff) format("woff")
    }
    
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 500;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff) format("woff")
    }
    
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 700;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff) format("woff")
    }
    
    @font-face {
        font-display: optional;
        font-family: Netflix Sans;
        font-weight: 900;
        src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2) format("woff2"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff) format("woff")
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        letter-spacing: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance:none;
        font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    }

    body {
        background-color: #f3f3f3;
    }
`