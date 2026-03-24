/**
 * Learn - Course Platform
 * Main App Component with Routing
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import './index.css';
import { useEffect } from 'react';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // Routes that hide header and footer (full-screen layouts)
  const hideLayoutRoutes = ['/studentdashboard'];
  const shouldHideLayout = hideLayoutRoutes.some(route => location.pathname.startsWith(route));

  // Routes that only hide footer
  const hideFooterRoutes = ['/login', '/signup', '/payment', '/payment-success'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || shouldHideLayout;

  return (
    <div className="app">
      <ScrollToHash />
      {!shouldHideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/studentdashboard" element={<Dashboard />} />
        <Route path="/studentdashboard/*" element={<Dashboard />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
