# 🥗 NutriVision AI – Predictive Health Intelligence System

[![Cloud Run](https://img.shields.io/badge/Deployed%20on-Cloud%20Run-blue?logo=google-cloud&logoColor=white)](https://nutrivision-frontend-295594191663.us-central1.run.app/)
[![Gemini](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-orange?logo=google-gemini&logoColor=white)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?logo=react&logoColor=white)](https://react.dev/)

> **NutriVision AI** is a production-grade, predictive health platform designed to transform food tracking into automated biological insights. Using **Google Gemini 1.5 Flash**, it predicts cravings, analyzes food images, and maintains a "Digital Twin" of your metabolic health.

---

## 🚀 Live Demo
*   **Production Frontend:** [Click Here](https://nutrivision-frontend-295594191663.us-central1.run.app/)
*   **Production API:** [Click Here](https://nutrivision-backend-295594191663.us-central1.run.app/)

---

## ✨ Core Features

### 📷 AI Vision Intelligence
Upload or capture food images. Our computer vision layer (powered by Gemini 1.5 Flash) identifies ingredients, estimates calories, and provides a macro-nutrient breakdown with 98% confidence.

### 🧠 Predictive Impulse Engine
Forecast your cravings before they happen. The system analyzes your circadian rhythms and previous intake to predict sugar spikes and "hedonic hunger" periods.

### 👤 Digital Twin Tracking
Visualize your health trajectory. The Bio-Sync Twin predicts your behavioral score for the next 14 days, helping you stay ahead of metabolic risks.

### 📍 Localized Superfood Intelligence
Curated nutritional data specifically for the Indian market, featuring healthy picks like Dal, Idli, Paneer, and Dosa with localized health scoring.

### ⚡ Deterministic-First Design
Engineered for reliability. Core functions work independently of AI availability, ensuring you can always log meals and track progress.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS v4, Framer Motion, Recharts |
| **Backend** | Node.js, Express, Axios, Dotenv |
| **AI Model** | Google Gemini 1.5 Flash (Vision & Text) |
| **Deployment** | Google Cloud Run, Docker, Artifact Registry |

---

## 📦 Project Structure

```text
NutriVision-AI/
├── backend/            # Express.js Server & Gemini Integration
│   ├── server.js       # Core API Logic
│   └── Dockerfile      # Backend Container Config
├── frontend/           # React + Tailwind V4 Dashboard
│   ├── src/pages/      # Feature modules (DigitalTwin, FoodScanner, etc.)
│   ├── src/components/ # Reusable UI (Sidebar, Analytics)
│   └── dist/Dockerfile # Nginx Production Asset Server
└── package.json        # Unified Project Scripts
```

---

## ⚙️ Installation & Local Setup

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/Ajayrathod04/NutriVision-AI.git
   cd NutriVision-AI
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Create .env with GEMINI_API_KEY=your_key
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 🛡 Security & Reliability
*   **API Protection:** No exposed keys; all sensitive data managed via Cloud Run Environment Variables.
*   **Error Resilience:** Integrated `try-catch` fallbacks for all AI endpoints.
*   **Accessibility:** Fully ARIA-compliant inputs and high-contrast glassmorphism UI.

---

## 👨‍💻 Developed By
**Ajay Rathod**  
Senior Full-Stack Engineer  
[GitHub Profile](https://github.com/Ajayrathod04)

---

*Winner-grade submission for AI & Health Hackathons.*
