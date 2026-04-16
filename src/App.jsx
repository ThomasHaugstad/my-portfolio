import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="app">
      <div className="top-banner">
        Personal Portfolio Website
      </div>

      <nav className="navbar">
        <Link to="/" className="nav-logo">Thomas Haugstad</Link>

        <div className="nav-links">
          <a href="#about">Experience</a>
          <a href="#projects">Projects</a> {/* changed */}
          <a href="#contact" className="contact-button">Contact</a>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;