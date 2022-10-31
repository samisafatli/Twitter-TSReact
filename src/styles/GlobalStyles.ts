import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html, body, #root {
    max-width: 100vh;
    max-height: 100vw;

    width: 100%;
    height: 100%;
   }
   *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, sans-serif;
   }

   html{
    background: var(--primary)
   }
   :root{
    --primary: #CFDBD5;
    --secondary: #15181C;
    --tertiary: #F5CB5C;
    --quaternary: #242423;
   }
`
