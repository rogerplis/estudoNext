import { createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 1px;
    box-sizing: border-box;
    background-color: #222;
    color: #eee;
    
}
html {
    font-size: 62,5%;
}
html, body, #__next {
    height: 100%;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

`
export default GlobalStyles;