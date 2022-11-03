import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html, body, #root {
    max-height: 100vw;
    background-color: var(--primary);
    width: 100%;
    height: 100%;
   }
   *, button, input {
    border: 0;
    font-family: -apple-system, system-ui, sans-serif;
   }

   :root{
    --primary: #CCD9EA;
    --secondary: #fff;
   }
`
// Azul Claro, 
// Amarelo,
// Marrom #75616b, 
// Vermelho #d34017