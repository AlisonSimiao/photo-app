import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    @keyframes up {
        0%{
            top: 0;
            left: 0;
            filter: invert(0);
        }
        
        50%{
            filter: invert(.5);
            left: 15px;
            top: -50px;
        }
        100%{
            top: 0;
            left: 0;
            filter: invert(0);
        }
    }
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @keyframes down {
        0%{
            filter: invert(0);
            top: 0;
            left: 0;
        }
        50%{
            
            filter: invert(1);
          
            left: -15px;
            top: 50px;
        }
        100%{
            filter: invert(0);
            top: 0;
            left: 0;
        }
    }
`;