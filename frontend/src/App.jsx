import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div className="App bg-slate-900 h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Browse />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/api/posts/:id/edit" element={<CreatePost />} />
            <Route path="/api/posts/:id/delete" element={<DeletePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
