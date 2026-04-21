# 🚀 NutriVision AI Workflow

## 1. Project Initialization
- Multi-repository structure: Backend (Node/Express) and Frontend (React/Vite).
- Dependency injection for AI (Gemini Flash 1.5).

## 2. Intelligence Layer
- **Food Analysis**: Processes base64 image data via Gemini Vision 1.5 Flash.
- **Personal Nutrition**: Takes user biometrics (age, weight, goal) and generates structured advice.
- **Medical Chat**: Context-aware AI responses for general nutrition inquiries.

## 3. Resilience & Fallbacks
- Deterministic fallback routes implemented for all AI endpoints to ensure 100% uptime during demos even if API quotas are hit or keys are missing.

## 4. UI/UX Strategy
- **Glassmorphism Design**: Using radial gradients and backdrop filters for a premium modern feel.
- **Interactive States**: Loading indicators and hover animations via Framer Motion.
- **Responsiveness**: Grid-based layout for mobile and desktop compatibility.

## 5. Deployment
- **Containerization**: Standard Dockerfile for Cloud Run compatibility.
- **Port Management**: Backend listens on `process.env.PORT || 8080`.
