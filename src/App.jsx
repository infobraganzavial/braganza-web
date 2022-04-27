import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Layout from './components/layout/Layout';
import Responsive from './components/responsive/Responsive';

// Theming
import colors from './theming/colors.js';

const GlobalStyle = createGlobalStyle`
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={colors}>
        <Router>
          <Routes>
            <Route path="/*" element={<Responsive><Layout /></Responsive>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
