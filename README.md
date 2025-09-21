# Stockers - The Smarter Way to Stock

A futuristic, animated landing page for Stockers, featuring a comprehensive learning management system for stock market education.

## Features

- 🎨 **Futuristic Design**: Deep black background with neon green accents
- 🌓 **Theme Toggle**: Dark (default) and light mode support
- 🧭 **Smooth Navigation**: Curved navbar with glassmorphic effects
- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- 🔐 **Authentication**: Supabase integration with Google OAuth and email/password
- ⚡ **Animations**: Framer Motion powered animations throughout
- 🎯 **Interactive Elements**: Hover effects, neon glows, and smooth transitions

## Sections

1. **Hero Section**: Fullscreen animated background with stock market theme
2. **What We Do**: Interactive chart with zoom-on-hover effects
3. **How Will You Learn**: Beginner and Intermediate learning paths
4. **Legends**: Animated achiever cards with staggered animations
5. **Stalk Us**: Social media links and contact information

## Tech Stack

- **Frontend**: React 18 + TypeScript + Next.js 15
- **Styling**: TailwindCSS with custom CSS variables
- **Animations**: Framer Motion
- **Authentication**: Supabase
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (for authentication)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Stockers
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Set up Supabase:

   - Create a new Supabase project
   - Enable Google OAuth in Authentication settings
   - Add your domain to allowed origins
   - Copy the project URL and anon key to your `.env.local`

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   └── callback/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── auth-provider.tsx
│   ├── hero-section.tsx
│   ├── how-you-learn-section.tsx
│   ├── legends-section.tsx
│   ├── login-modal.tsx
│   ├── navbar.tsx
│   ├── stalk-us-section.tsx
│   ├── theme-provider.tsx
│   └── what-we-do-section.tsx
└── public/
    └── stockers.svg
```

## Customization

### Theme Colors

Modify the CSS variables in `src/app/globals.css`:

```css
:root {
  --neon-green: #00ef00;
  --glass-bg: rgba(0, 239, 0, 0.1);
  --glass-border: rgba(0, 239, 0, 0.3);
}
```

### Animations

Adjust animation timings and effects in individual components using Framer Motion.

### Content

Update text content, images, and links in the respective component files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at hello@stockers.com or create an issue in the repository.
