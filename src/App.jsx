import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Layout from './components/layout/Layout';
import Responsive from './components/responsive/Responsive';
import Landing from './pages/landing/Landing';

// Theming
import colors from './theming/colors.js';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={colors}>
        <Router>
          <Routes>
            <Route path="/" element={<Responsive><Layout /></Responsive>}>
              <Route index element={<Landing />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer
            position= "top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
      </ThemeProvider>
    </>
  );
}

export default App;
