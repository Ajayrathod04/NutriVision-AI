import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, User, Lock, Sparkles, ShieldCheck } from "lucide-react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("ajay.rathod@demo.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin("Ajay Rathod"); 
    }
  };

  return (
    <div style={styles.page}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="glass-card" 
        style={styles.card}
      >
        <div style={styles.header}>
          <div style={styles.iconCircle}>
            <Sparkles color="#6366f1" size={32} />
          </div>
          <h2 style={styles.title}>NutriVision AI</h2>
          <p style={styles.subtitle}>Predictive Health Intelligence System</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputWrapper}>
            <User size={18} style={styles.inputIcon} />
            <input 
              type="text" 
              placeholder="Username / Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              aria-label="Username"
            />
          </div>
          <div style={styles.inputWrapper}>
            <Lock size={18} style={styles.inputIcon} />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              aria-label="Password"
            />
          </div>
          <button type="submit" style={styles.button}>
            <LogIn size={20} /> Access Dashboard
          </button>
        </form>
        
        <div style={styles.footer}>
          <ShieldCheck size={14} color="#10b981" />
          <span>Secured by predictive biometric encryption</span>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at top left, #1e1b4b, #0f172a, #111827)",
    padding: "20px"
  },
  card: {
    maxWidth: "420px",
    width: "100%",
    padding: "40px",
    textAlign: "center",
  },
  header: {
    marginBottom: "35px"
  },
  iconCircle: {
    width: "70px",
    height: "70px",
    background: "rgba(99, 102, 241, 0.1)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    border: "1px solid rgba(99, 102, 241, 0.2)"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "800",
    marginBottom: "8px",
    background: "linear-gradient(to right, #818cf8, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  subtitle: {
    color: "#64748b",
    fontSize: "0.95rem"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  inputWrapper: {
    position: "relative"
  },
  inputIcon: {
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#6366f1",
    opacity: 0.8
  },
  input: {
    padding: "15px 15px 15px 45px",
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "15px",
    color: "white",
    fontSize: "1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    background: "linear-gradient(135deg, #6366f1, #a855f7)",
    color: "white",
    border: "none",
    padding: "16px",
    borderRadius: "15px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)",
    transition: "all 0.3s"
  },
  footer: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "0.75rem",
    color: "#475569"
  }
};
