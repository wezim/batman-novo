import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Fotos from './components/pages/fotos';
import Contato from './components/pages/contato';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Fotos' element={<Fotos />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
