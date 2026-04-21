import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, Circle, Plus, Zap, Heart, Leaf } from "lucide-react";
import { useState } from "react";

console.log("Rendering: GroceryList");

export default function GroceryList() {
  const [items, setItems] = useState([
    { id: 1, name: "Organic Spinach", category: "Greens", checked: false, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&h=100&fit=crop" },
    { id: 2, name: "Avocado", category: "Healthy Fats", checked: true, image: "https://images.unsplash.com/photo-1523049673857-d185397756a8?w=100&h=100&fit=crop" },
    { id: 3, name: "Greek Yogurt", category: "Protein", checked: false, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=100&h=100&fit=crop" },
    { id: 4, name: "Chia Seeds", category: "Fiber", checked: false, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop" },
    { id: 5, name: "Quinoa", category: "Whole Grains", checked: false, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop" },
    { id: 6, name: "Blueberries", category: "Antioxidants", checked: false, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=100&h=100&fit=crop" },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in p-2 md:p-6 pb-20">
      <header className="flex justify-between items-end border-b border-white/5 pb-8">
        <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-2xl border border-primary/30">
                <ShoppingBag className="text-primary" size={28} />
            </div>
            <div>
                <h2 className="text-3xl font-black text-white">Biological Inventory</h2>
                <p className="text-gray-400">Stocking the essentials for optimal cellular function.</p>
            </div>
        </div>
        <button className="btn-primary py-2 px-6 flex items-center gap-2">
            <Plus size={18} /> Add Item
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => toggleItem(item.id)}
            className={`glass-card p-4 flex items-center justify-between cursor-pointer group hover:border-primary/40 transition-all ${item.checked ? 'opacity-50' : ''}`}
          >
            <div className="flex items-center gap-6">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-white/10" />
                <div>
                    <h4 className={`font-bold transition-all ${item.checked ? 'line-through text-gray-500' : 'text-white'}`}>{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                        <Leaf size={12} className="text-accent" />
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{item.category}</span>
                    </div>
                </div>
            </div>
            <div className={`p-2 rounded-full transition-all ${item.checked ? 'bg-accent text-white' : 'bg-white/5 text-gray-700 group-hover:text-primary'}`}>
                <CheckCircle2 size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="glass-card p-6 border-l-4 border-yellow-500 bg-yellow-500/5">
            <h4 className="font-bold flex items-center gap-2 mb-2"><Zap size={18} className="text-yellow-500" /> Nutrient Tip</h4>
            <p className="text-xs text-gray-400 leading-relaxed italic">Combining Spinach with Vitamin C (like Lemon) increases iron absorption by up to 200%.</p>
        </div>
        <div className="glass-card p-6 border-l-4 border-primary bg-primary/5">
            <h4 className="font-bold flex items-center gap-2 mb-2"><Heart size={18} className="text-primary" /> Brain Health</h4>
            <p className="text-xs text-gray-400 leading-relaxed italic">Blueberries are the #1 source of anthocyanins, which protect neural pathways from oxidative stress.</p>
        </div>
      </div>
    </div>
  );
}
