import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App bg-slate-900 h-max">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:id/edit" element={<CreatePost />} />
            <Route path="/:id/delete/" element={<DeletePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
