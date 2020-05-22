import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    body2: {
      fontSize: 35,
      fontFamily: "'Libre Franklin', sans-serif"
    },
    body1:{
      fontSize: 50,
      fontFamily: "'Squada One', cursive"
    },
    h3: {
      fontSize: 25,
      fontFamily: "'Lobster', cursive",
      fontWeight: 400,
    },
    caption: {
      fontFamily: "'Noto Sans TC', sans-serif",
    },
    button: {
      fontFamily: "'Noto Sans TC', sans-serif",
    },
    h4:{
      fontFamily: "'Pacifico', cursive",
      color:'#761137',
      fontSize:'1.6rem'
    },
    h5: {
      fontFamily: "'Cinzel Decorative', cursive",
      color: '#ed335f',
      fontSize: '1.4rem'
    },
    h6:{
      fontFamily: "'Cinzel Decorative', cursive",
      size:'40px',
      color: '#ed335f'
    },
    h2 :{
      fontSize: 20,
      fontFamily: "'Lobster', cursive",
      color:'#292f33'
    }
  },
  shadows: ["10"],
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#424242",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.querySelector("#root")
);
