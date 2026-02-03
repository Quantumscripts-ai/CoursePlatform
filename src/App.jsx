/**
 * Learn - Course Platform
 * Main App Component with Routing
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ReactCourse from './pages/ReactCourse';
import MLCourse from './pages/MLCourse';
import DLCourse from './pages/DLCourse';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses/react" element={<ReactCourse />} />
          <Route path="/courses/machine-learning" element={<MLCourse />} />
          <Route path="/courses/deep-learning" element={<DLCourse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
