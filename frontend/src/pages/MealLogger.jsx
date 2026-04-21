import { useState } from "react";
import { motion } from "framer-motion";
import { List, Plus, Trash2 } from "lucide-react";

export default function MealLogger() {
  const [meals, setMeals] = useState([
    { name: "Oatmeal with Blueberries", calories: 350, time: "08:15 AM" },
    { name: "Grilled Chicken Salad", calories: 420, time: "01:20 PM" }
  ]);
  const [newName, setNewName] = useState("");
  const [newCals, setNewCals] = useState("");

  const addMeal = () => {
    if (!newName) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMeals([...meals, { name: newName, calories: parseInt(newCals) || 200, time: timeStr }]);
    setNewName("");
    setNewCals("");
  };

  const removeMeal = (index) => {
    setMeals(meals.filter((_, i) => i !== index));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "25px" }}>
        <List color="#6366f1" />
        <h2 style={{ margin: 0 }}>Meal Diary</h2>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <input 
          placeholder="Meal name..." 
          value={newName}
          onChange={e => setNewName(e.target.value)}
          style={{ marginBottom: 0 }}
        />
        <input 
          placeholder="Cals" 
          type="number"
          value={newCals}
          onChange={e => setNewCals(e.target.value)}
          style={{ width: "100px", marginBottom: 0 }}
        />
        <button onClick={addMeal} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 15px" }}>
          <Plus size={20} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {meals.map((meal, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px", background: "rgba(255,255,255,0.03)", borderRadius: "14px", border: "1px solid var(--border)" }}>
            <div>
              <p style={{ fontWeight: 600 }}>{meal.name}</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b" }}>{meal.time} • {meal.calories} kcal</p>
            </div>
            <button 
              onClick={() => removeMeal(i)}
              style={{ background: "transparent", border: "none", color: "#ef4444", padding: 0 }}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", textAlign: "center", padding: "15px", borderTop: "1px solid var(--border)" }}>
        <p style={{ color: "#94a3b8" }}>Total Calories: <strong>{meals.reduce((s, m) => s + m.calories, 0)}</strong></p>
      </div>
    </motion.div>
  );
}
