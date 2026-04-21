import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Scan, List, BarChart, Zap, User, MessageCircle, Info 
} from "lucide-react";

import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import FoodScanner from "./pages/FoodScanner";
import MealLogger from "./pages/MealLogger";
import DailyReport from "./pages/DailyReport";
import CravingPredictor from "./pages/CravingPredictor";
import DigitalTwin from "./pages/DigitalTwin";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Top Navbar */}
        <nav className="glass-nav">
          <Link to="/dashboard" className="logo">
           <Zap color="#6366f1" fill="#6366f1" size={24} />
           <span>NutriVision AI</span>
          </Link>
          <div className="nav-links">
            <Link to="/dashboard"><Home size={20} /></Link>
            <Link to="/scanner"><Scan size={20} /></Link>
            <Link to="/chat"><MessageCircle size={20} /></Link>
            <Link to="/digital-twin"><User size={20} /></Link>
          </div>
        </nav>

        <main className="content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scanner" element={<FoodScanner />} />
              <Route path="/logger" element={<MealLogger />} />
              <Route path="/report" element={<DailyReport />} />
              <Route path="/predictor" element={<CravingPredictor />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Bottom Mobile Navigation */}
        <nav className="mobile-nav">
          <Link to="/dashboard"><Home /></Link>
          <Link to="/scanner"><Scan /></Link>
          <Link to="/predictor"><Zap /></Link>
          <Link to="/report"><BarChart /></Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
