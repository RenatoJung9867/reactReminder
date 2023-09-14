import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --yellow-300: #fff5cc;
    --yellow-600: #ffe066;
    --yellow-900: #e6b800;

    --font-black: #1c1c1c;
    --font-white: #fff;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
html {
    @media(max-width: 1080px){
        font-size: 93,75% }
    @media(max-width: 780px) {
        font-size: 87,50% }    
}

`;