import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff; //100
  --background: #f2f3f5; //200
  --gray-line: #dcdde0;  //300 
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

@media(max-width:1080px) {
  hmtl {
    font-size: 93.75%;
  }
}

@media(max-width:720px) {
  hmtl {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--text)
}

body, input, textarea, button {
  font: 400 16px "Inter", sans-serif;
}

button {
  cursor: pointer;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
  outline: none;
}
`;