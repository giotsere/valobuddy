import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Browse from './pages/Browse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Browse />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
