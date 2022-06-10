import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home';
import Project from './Pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
