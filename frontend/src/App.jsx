import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import FoodScanner from "./pages/FoodScanner";
import MealLogger from "./pages/MealLogger";
import DailyReport from "./pages/DailyReport";
import CravingPredictor from "./pages/CravingPredictor";
import DigitalTwin from "./pages/DigitalTwin";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import HabitTracker from "./pages/HabitTracker";

function App() {
  const [user, setUser] = useState({ name: "Ajay Rathod" }); // Defaulting to logged in for demo

  return (
    <Router>
      <AnimatePresence mode="wait">
        {!user ? (
          <Routes>
            <Route path="*" element={<Login onLogin={(name) => setUser({ name })} />} />
          </Routes>
        ) : (
          <AppLayout>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/scanner" element={<FoodScanner />} />
              <Route path="/logger" element={<MealLogger />} />
              <Route path="/report" element={<DailyReport />} />
              <Route path="/predictor" element={<CravingPredictor />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/habit-tracker" element={<HabitTracker />} />
              {/* Fallbacks for new requested pages */}
              <Route path="/achievements" element={<Dashboard user={user} />} />
            </Routes>
          </AppLayout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
