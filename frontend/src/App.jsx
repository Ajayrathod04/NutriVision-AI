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
import FoodGallery from "./pages/FoodGallery";
import Achievements from "./pages/Achievements";
import GroceryList from "./pages/GroceryList";

const NotFound = () => (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-5xl font-black mb-4">404</h2>
        <p className="text-gray-400 mb-8">Bio-route not found. Redirecting to neural center?</p>
        <button onClick={() => window.location.href = '/'} className="btn-primary">Return to Base</button>
    </div>
);

function App() {
  const [user, setUser] = useState({ name: "Ajay Rathod" });

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
              <Route path="/craving" element={<CravingPredictor />} />
              <Route path="/gallery" element={<FoodGallery />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/grocery" element={<GroceryList />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/habit-tracker" element={<HabitTracker />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
