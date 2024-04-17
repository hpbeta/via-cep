import { createGlobalStyle} from "styled-components"

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e4e4e4e4;
}

`