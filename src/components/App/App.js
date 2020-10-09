import React from 'react';
import SideNav from '../SideNav/SideNav';
import Node from '../Node/Node';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SideNav />
        <Node />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
