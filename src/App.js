import Home from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PostsDashboard from './pages/PostsDashboard';
import SavedPosts from './pages/SavedPosts';
import CreatePost from './pages/CreatePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/user-posts/:id" element={<PostsDashboard />} />
        <Route path="/saved-posts/:id" element={<SavedPosts />} />
        <Route path="/create-post/:id" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;