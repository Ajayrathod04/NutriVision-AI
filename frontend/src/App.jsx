import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import CravingPredictor from "./pages/CravingPredictor";
import FoodGallery from "./pages/FoodGallery";
import GroceryList from "./pages/GroceryList";
import Achievements from "./pages/Achievements";

function NotFound() {
  return <div style={{color:"white",padding:"20px"}}>404 Not Found</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/craving" element={<CravingPredictor />} />
          <Route path="/gallery" element={<FoodGallery />} />
          <Route path="/grocery" element={<GroceryList />} />
          <Route path="/achievements" element={<Achievements />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
