//import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Contacto from './Views/Contacto';
import Home from './Views/Home';
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Views/Contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};
export default App;
