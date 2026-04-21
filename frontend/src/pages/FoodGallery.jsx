import { motion } from "framer-motion";
import { Utensils, Zap, Sparkles, Filter } from "lucide-react";

console.log("Rendering: FoodGallery");

const foods = [
    { name: "Dal Tadka", cals: 150, info: "High fiber protein", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
    { name: "Paneer Tikka", cals: 220, info: "Calcium rich", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop" },
    { name: "Idli Sambar", cals: 80, info: "Fermented prob", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop" },
    { name: "Oatmeal Bowl", cals: 250, info: "Slow carbs", img: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop" },
    { name: "Fresh Salad", cals: 120, info: "Micro nutrients", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
    { name: "Fruit Platter", cals: 110, info: "Antioxidants", img: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&h=300&fit=crop" },
];

export default function FoodGallery() {
  if (!FoodGallery) return <div>Syncing Library...</div>;
  return (
    <div className="space-y-8 animate-in p-2 md:p-6 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20">
                <Utensils className="text-accent" size={28} />
            </div>
            <div>
                <h2 className="text-3xl font-black">Digital Food Library</h2>
                <p className="text-gray-400">Localized nutritional profiles for optimal intelligence.</p>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"><Filter size={20} /></button>
            <button className="bg-accent text-white px-6 py-2 rounded-xl font-bold text-sm shadow-xl shadow-accent/20">Sync Data</button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((food, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card group overflow-hidden"
          >
            <div className="h-48 overflow-hidden relative">
                <img src={food.img} alt={food.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-white/10">
                    {food.cals} kcal
                </div>
            </div>
            <div className="p-6">
                <h4 className="text-lg font-bold mb-2">{food.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{food.info}</span>
                </div>
                <button className="w-full bg-white/5 border border-white/5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Detailed Macro Map</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
