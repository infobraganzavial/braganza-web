import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';
import Responsive from './components/responsive/Responsive';

function App() {
  return (
<<<<<<< HEAD
    <h1>Braganza Vial - Testing environment</h1>
=======
    <Router>
      <Routes>
        <Route path="/*" element={<Responsive><Layout /></Responsive>}/>
      </Routes>
    </Router>
>>>>>>> develop
  );
}

export default App;
