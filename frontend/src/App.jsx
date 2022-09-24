import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
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
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
