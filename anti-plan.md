# 🛡 NutriVision AI Anti-Plan (Resilience Strategy)

## ❌ Risk: AI Latency or API Down
- **Solution**: Every endpoint (`/analyze-food`, `/personal-nutrition`, `/ask-ai`) has a `try-catch` block that returns a "Deterministic Fallback".
- **Benefit**: The UI never shows a "broken" state; it always provides helpful, pre-calculated advice.

## ❌ Risk: Large Image Uploads
- **Solution**: Express middleware configured with `{ limit: "10mb" }` and base64 extraction to handle standard mobile camera photos.

## ❌ Risk: Port Conflicts on Cloud Run
- **Solution**: Explicit use of `const PORT = process.env.PORT || 8080`.

## ❌ Risk: Environment Variable Missing
- **Solution**: Default "dummy_key" used as fallback in code, paired with error-safe catch blocks.

## ❌ Risk: Slow Frontend hydration
- **Solution**: Vite-powered React with pre-styled internal CSS objects to minimize layout shift.
