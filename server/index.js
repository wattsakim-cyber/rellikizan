require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Motion Control Video App API is running' });
});

// Upload character image endpoint
app.post('/api/upload/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

// Upload motion video endpoint
app.post('/api/upload/video', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No video file uploaded' });
  }
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

// Generate motion control video endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { characterImage, motionVideo, prompt, settings } = req.body;
    
    // TODO: Integrate with motion control API (e.g., Kling, Runway, etc.)
    // For now, return a mock response
    res.json({
      success: true,
      message: 'Video generation started',
      jobId: Date.now().toString(),
      status: 'processing'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Check generation status endpoint
app.get('/api/status/:jobId', async (req, res) => {
  const { jobId } = req.params;
  
  // TODO: Check actual status from motion control API
  res.json({
    jobId,
    status: 'completed',
    videoUrl: '/uploads/sample-output.mp4'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
