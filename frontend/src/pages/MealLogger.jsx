import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Utensils, Zap, Smile, Meh, Frown } from "lucide-react";

export default function MealLogger() {
  const [meals, setMeals] = useState([
    { name: "Oatmeal with Almonds", calories: 350, time: "08:15 AM", mood: "Happy" },
    { name: "Avocado Toast", calories: 420, time: "11:20 AM", mood: "Neutral" }
  ]);
  const [form, setForm] = useState({ name: "", calories: "", mood: "Happy" });

  const addMeal = () => {
    if (!form.name) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMeals([...meals, { ...form, time: timeStr }]);
    setForm({ name: "", calories: "", mood: "Happy" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-in p-2 md:p-6">
      {/* Form Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/20 p-2 rounded-lg"><Plus className="text-primary" /></div>
            <h2 className="text-xl font-bold">Log New Meal</h2>
          </div>
          
          <div className="space-y-4">
            <div>
                <label className="text-xs font-bold text-gray-500 mb-2 block tracking-wider">FOOD NAME</label>
                <input 
                    placeholder="e.g. Quinoa Salad" 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-3 outline-none focus:border-primary transition-colors"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-bold text-gray-500 mb-2 block tracking-wider">CALORIES</label>
                    <input 
                        placeholder="0" type="number"
                        value={form.calories}
                        onChange={e => setForm({...form, calories: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 rounded-xl p-3 outline-none focus:border-primary transition-colors"
                    />
                </div>
                <div>
                    <label className="text-xs font-bold text-gray-500 mb-2 block tracking-wider">MOOD</label>
                    <select 
                        value={form.mood}
                        onChange={e => setForm({...form, mood: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 rounded-xl p-3 outline-none focus:border-primary transition-colors"
                    >
                        <option>Happy</option>
                        <option>Neutral</option>
                        <option>Stressed</option>
                    </select>
                </div>
            </div>
            <button onClick={addMeal} className="btn-primary w-full mt-4" aria-label="Add meal to daily log">
              <Zap size={18} /> Add to Log
            </button>
          </div>
        </div>

        <div className="glass-card p-6 border-l-4 border-primary">
            <h4 className="font-bold mb-2">Pro Tip</h4>
            <p className="text-sm text-gray-400">Eating protein-rich breakfasts can reduce late-night cravings by up to 50%.</p>
        </div>
      </div>

      {/* List Section */}
      <div className="lg:col-span-3 space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-2 rounded-lg"><Utensils className="text-accent" /></div>
                <h2 className="text-xl font-bold">Today's Timeline</h2>
            </div>
            <span className="bg-glass px-3 py-1 rounded-full text-xs font-bold">38% Of Daily Goal</span>
          </div>

          <div className="space-y-4">
            {meals.map((meal, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center border border-white/10">
                    {meal.mood === 'Happy' ? <Smile size={20} className="text-yellow-500" /> : <Meh size={20} className="text-gray-400" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{meal.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{meal.time} • {meal.calories} kcal</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMeals(meals.filter((_, idx) => idx !== i))}
                  className="p-2 text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
