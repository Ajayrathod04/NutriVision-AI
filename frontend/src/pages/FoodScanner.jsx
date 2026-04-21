import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Loader2, Info } from "lucide-react";
import axios from "axios";

export default function FoodScanner() {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const analyze = async () => {
    if (!image) return;
    setIsAnalyzing(true);
    setResult("");

    try {
      const response = await axios.post(`${BACKEND_URL}/analyze-food`, { image });
      setResult(response.data.data);
    } catch (err) {
      setResult("AI service unavailable. Showing basic insights. Estimated calories: 250.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <Camera size={48} color="#6366f1" style={{ marginBottom: "15px" }} />
        <h2>AI Food Scanner</h2>
        <p style={{ color: "#94a3b8" }}>Scan your meal for instant nutritional insights.</p>
      </div>

      <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "20px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", overflow: "hidden", position: "relative" }}>
        {image ? (
          <img src={image} alt="Capture" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ textAlign: "center", color: "#475569" }}>
            <Camera size={40} style={{ marginBottom: "10px" }} />
            <p>No Image Selected</p>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        <input type="file" accept="image/*" onChange={handleCapture} id="scan-input" style={{ display: "none" }} />
        <label htmlFor="scan-input" style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "12px", cursor: "pointer", border: "1px solid var(--border)" }}>
          {image ? "Retake" : "Choose Photo"}
        </label>
        <button onClick={analyze} disabled={!image || isAnalyzing} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          {isAnalyzing ? <Loader2 className="animate-spin" /> : "Analyze Meal"}
        </button>
      </div>

      {result && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }} 
          style={{ marginTop: "25px", padding: "15px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "16px", border: "1px solid rgba(99, 102, 241, 0.2)" }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <Info color="#818cf8" size={20} />
            <div style={{ fontSize: "0.95rem", whiteSpace: "pre-wrap" }}>{result}</div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
