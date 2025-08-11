# Career Assistant - AI-Powered Career Guidance

A modern, AI-powered career guidance platform built with React, TypeScript, and Tailwind CSS. Get personalized career roadmaps, salary insights, and skill development plans.

## 🚀 Features

- **AI-Powered Career Search**: Intelligent job role analysis with comprehensive insights
- **Interactive Feature Cards**: Explore scope, salary, future prospects, and top companies
- **Personalized Roadmaps**: Tailored learning paths for students, professionals, and career changers
- **Real-time Data Integration**: 
  - YouTube educational content
  - GitHub repositories
  - Udemy courses
  - LinkedIn job listings
- **AI Chatbot**: 24/7 career guidance support
- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Responsive Design**: Mobile-first approach with dark mode support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Animations**: Motion (Framer Motion)
- **UI Components**: Custom components with Radix UI primitives
- **APIs**: YouTube, GitHub, Udemy, LinkedIn (simulated)
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/career-assistant.git
   cd career-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
career-assistant/
├── public/                 # Static assets
├── src/
│   ├── api/               # API integrations
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── pages/        # Page components
│   │   └── figma/        # Figma-specific components
│   ├── contexts/         # React contexts
│   ├── styles/           # CSS and styling
│   ├── guidelines/       # Development guidelines
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Design System

The project uses a custom design system with:
- **Navy Blue Color Palette**: Professional and modern
- **Glassmorphism Effects**: Subtle transparency and blur effects
- **Typography**: Inter font family with enhanced weights
- **Component Library**: Custom UI components with consistent styling
- **Responsive Grid**: Mobile-first responsive design

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key
VITE_GITHUB_TOKEN=your_github_token
VITE_OPENAI_API_KEY=your_openai_api_key
```

### API Keys

- **YouTube Data API**: Required for educational video content
- **GitHub API**: For repository recommendations
- **OpenAI API**: For AI chatbot functionality

## 🚀 Deployment

### Deploy to Vercel

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Add environment variables
5. Deploy

### Deploy to Netlify

1. Fork this repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables
6. Deploy

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://your-username.github.io/career-assistant",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**LNMIIT Underdogs**
- Built with ❤️ by students for students
- Contact: team@lnmiitunderdogs.com

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- YouTube, GitHub, and Udemy for educational content APIs
- Radix UI for accessible component primitives
- Tailwind CSS for styling framework
- Motion for smooth animations

## 📞 Support

For support, email support@lnmiitunderdogs.com or join our Discord server.

---

Made with ❤️ by LNMIIT Underdogs