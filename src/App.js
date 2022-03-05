import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/todo' exact element={<About/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

