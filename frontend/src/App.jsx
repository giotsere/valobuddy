import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App bg-slate-900">
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:id/edit" element={<CreatePost />} />
            <Route path="/:id/delete/" element={<DeletePost />} />
            <Route path="/users/:id/" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
