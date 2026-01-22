#  Rellikizan

A motion control video generator app inspired by Higgsfield AI - transfer motion from reference videos to character images.

## 🚀 Free to Use - Deployed & Ready!

**Rellikizan is completely FREE to use!** The app is deployed on Render.com's free tier and ready for testing.

### For Coworkers/Testers:

**1. Get Your Free Replicate API Key**
- Sign up at [Replicate.com](https://replicate.com/) (100% FREE)
- Go to your [Account Settings](https://replicate.com/account/api-tokens)
- Create a new API token (it's free!)
- Copy your API token

**2. Use the App**
- The app will prompt you for your Replicate API token when you first use it
- Paste your token and start creating videos!
- Your token is only stored in your browser (completely private)

**3. Create Motion-Controlled Videos**
- Upload a character image (PNG, JPG)
- Upload a motion reference video (MP4, MOV)
- Click "Generate Video" and wait for the magic!
- Replicate's free tier includes generous credits to get started

> **Note:** Each user needs their own free Replicate account. This keeps the app free for everyone and ensures you have full control over your usage.


## Overview

This application allows users to create AI-generated videos by transferring motion from a reference video onto a still character image, similar to Higgsfield's motion control feature.

## Features

- **Character Image Upload**: Upload still images of characters, avatars, or subjects
- **Motion Reference Upload**: Upload short video clips with desired movements
- **Motion Transfer**: AI-powered motion extraction and transfer to character images
- **Video Generation**: Create videos where your character follows the reference motion
- **API Integration**: Ready to integrate with motion control APIs (Kling, Runway, etc.)

## Project Structure

```
motion-control-video-app/
├── server/              # Backend Express server
│   └── index.js         # API endpoints and server logic
├── client/              # Frontend React app (to be created)
├── uploads/             # Temporary file storage
├── package.json         # Project dependencies
├── .gitignore          # Git ignore rules
├── LICENSE             # MIT License
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- An API key from a motion control service (optional, for production)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/wattsakim-cyber/motion-control-video-app.git
cd motion-control-video-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Create uploads directory**
```bash
mkdir uploads
```

4. **Create .env file**
```bash
touch .env
```

Add your configuration:
```
PORT=5000
MOTION_API_KEY=your_api_key_here
MOTION_API_URL=https://api.motion-service.com
```

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status

### Upload Character Image
```
POST /api/upload/image
Content-Type: multipart/form-data
Body: { image: File }
```
Returns: `{ success: true, filename: string, path: string }`

### Upload Motion Video
```
POST /api/upload/video
Content-Type: multipart/form-data
Body: { video: File }
```
Returns: `{ success: true, filename: string, path: string }`

### Generate Video
```
POST /api/generate
Content-Type: application/json
Body: {
  characterImage: string,
  motionVideo: string,
  prompt: string,
  settings: object
}
```
Returns: `{ success: true, jobId: string, status: string }`

### Check Status
```
GET /api/status/:jobId
```
Returns: `{ jobId: string, status: string, videoUrl: string }`

## Next Steps

### 1. Create Frontend Interface

Create a React app in the `client/` directory:
```bash
npx create-react-app client
```

Implement UI components for:
- Image upload widget
- Video upload widget
- Generation controls (prompt, settings)
- Video player for results

### 2. Integrate Motion Control API

Choose and integrate with a motion control service:

**Option A: Kling Motion Control**
- Sign up at Kling AI platform
- Get API credentials
- Implement API calls in `server/index.js`

**Option B: Runway ML**
- Create Runway account
- Use Gen-2 with motion control
- Update server endpoints

**Option C: Open Source Models**
- Use AnimateDiff or similar
- Set up local GPU inference
- Modify server for local processing

### 3. Enhance Features

- **User Authentication**: Add login/signup functionality
- **Video Library**: Store and manage generated videos
- **Batch Processing**: Generate multiple videos at once
- **Advanced Settings**: Frame rate, resolution, duration controls
- **Motion Library**: Pre-made motion templates

### 4. Deploy to Production

**Backend:**
- Deploy to Heroku, Railway, or AWS
- Set up cloud storage (S3, Cloudinary) for files
- Configure environment variables

- #### Deploy on Render.com (FREE)

**Quick Deploy (Easiest Way):**

1. Fork this repository to your GitHub account
2. Sign up for [Render.com](https://render.com) (100% FREE)
3. Click "New Web Service" and connect your GitHub repository
4. Render will automatically detect `render.yaml` and configure everything
5. Add your `REPLICATE_API_TOKEN` in the Environment section
6. Click "Create Web Service" - Deploy is FREE!
7. Share the generated URL with your team!

**Manual Deploy:**

1. Create a new Web Service on Render
2. Connect your GitHub repo
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Select "Free" plan
6. Add environment variable: `REPLICATE_API_TOKEN=your_token_here`
7. Deploy!


**Frontend:**
- Build React app: `cd client && npm run build`
- Deploy to Vercel, Netlify, or serve from Express

## Technology Stack

- **Backend**: Node.js, Express
- **File Upload**: Multer
- **HTTP Client**: Axios
- **Frontend** (planned): React
- **Motion AI**: Kling / Runway / Custom API

## How Motion Control Works

1. **User uploads a character image** - A clear frontal or full-body shot
2. **User uploads a motion reference video** - Short clip showing desired movement
3. **System extracts motion** - AI analyzes body pose and movement trajectory
4. **Motion is transferred** - Character image is animated following the extracted motion
5. **Video is generated** - Final output combines character appearance with reference motion

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Higgsfield AI's motion control feature
- Built for the South LA community technology initiatives

## Resources

- [Higgsfield AI](https://higgsfield.ai)
- [Kling AI Documentation](https://kling.ai/docs)
- [Runway ML API](https://runwayml.com/api)
- [AnimateDiff](https://github.com/guoyww/AnimateDiff)

---

**Ready to build something amazing? Start by creating the frontend in the `client/` directory!**
