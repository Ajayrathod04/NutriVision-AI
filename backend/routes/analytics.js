const express = require("express");
const router = express.Router();
const db = require("../config/firestore");

router.post("/log", async (req, res) => {
  try {
    const data = {
      action: req.body.action || "unknown",
      timestamp: new Date().toISOString()
    };

    await db.collection("logs").add(data);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: false });
  }
});

module.exports = router;
