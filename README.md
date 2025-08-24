# RetroWeb - Play Retro Games in Your Browser

RetroWeb is a modern web platform that lets you play classic retro games directly in your browser. Experience the nostalgia of gaming systems from the past with support for GBA, SNES, NES, and DOS games, all through a sleek, responsive interface.

![RetroWeb Logo](public/gba.svg)

## ✨ Features

- **Multi-Platform Support**: Play games from GBA, SNES, NES, and DOS platforms
- **Browser-Based Gaming**: No downloads or installations required - play instantly
- **Modern UI**: Clean, responsive design with smooth animations
- **Game Library**: Curated collection of classic games
- **Admin Panel**: Easy game management and upload system
- **Mobile Friendly**: Play on desktop, tablet, or mobile devices
- **SEO Optimized**: Built with Next.js for excellent search engine visibility

## 🚀 Tech Stack

This project is built using the [T3 Stack](https://create.t3.gg/) with additional gaming-specific technologies:

### Core Technologies

- **[Next.js](https://nextjs.org)** - React framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Drizzle ORM](https://orm.drizzle.team)** - Database ORM for TypeScript

### Gaming & UI

- **[EmulatorJS](https://github.com/EmulatorJS/EmulatorJS)** - Web-based game emulator
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Uploadthing](https://uploadthing.com/)** - File upload management
- **Custom Fonts**: Montserrat and Orbitron for retro gaming aesthetics

### Database & Hosting

- **PostgreSQL** - Primary database
- **Drizzle Kit** - Database migrations and management
- **Vercel** - Recommended hosting platform

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (using npm as package manager)
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kLaz3r/retroweb.git
   cd retroweb
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your database URL and other configuration:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/retroweb"
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   ```

4. **Set up the database**

   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Supported Platforms

RetroWeb currently supports the following gaming platforms:

- **Game Boy Advance (GBA)** - `.gba` files
- **Super Nintendo Entertainment System (SNES)** - `.sfc`, `.smc` files
- **Nintendo Entertainment System (NES)** - `.nes` files
- **MS-DOS** - `.zip` files containing DOS executables

## 📁 Project Structure

```
retroweb/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── (home)/         # Homepage components
│   │   ├── admin/          # Admin panel
│   │   ├── api/            # API routes
│   │   ├── emulator/       # Game emulator pages
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── Emulator.tsx    # Game emulator component
│   │   ├── GamesList.tsx   # Games sidebar
│   │   └── Header.tsx      # Navigation header
│   ├── server/             # Server-side code
│   │   └── db/            # Database schema and config
│   └── styles/            # Global styles
├── public/                # Static assets
│   ├── emulatorjs/       # EmulatorJS library
│   ├── images/           # Game screenshots
│   └── js-dos/          # DOS emulator
└── drizzle/              # Database migrations
```

## 🗄️ Database Schema

The application uses a simple database schema with a single `games` table:

```sql
games {
  id: integer (primary key)
  name: text
  platform: text
  file_url: text
  created_at: timestamp
  updated_at: timestamp
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:write` - Format code with Prettier
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can also be deployed to:

- **Netlify**
- **Railway**
- **Render**
- **Self-hosted** with Docker

## 🎨 Design & UI

RetroWeb features a modern design inspired by retro gaming aesthetics:

- **Color Scheme**: Dark background with neon accents
- **Typography**: Custom fonts (Montserrat, Orbitron) for gaming feel
- **Animations**: Smooth transitions powered by Framer Motion
- **Responsive**: Optimized for all screen sizes
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style (Prettier + ESLint)
- Write TypeScript with proper type definitions
- Test your changes across different platforms
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [EmulatorJS](https://github.com/EmulatorJS/EmulatorJS) for the web-based emulation
- [js-dos](https://js-dos.com/) for DOS game support
- [T3 Stack](https://create.t3.gg/) for the excellent development foundation
- [Vercel](https://vercel.com) for hosting and deployment

## 📞 Support

If you have any questions or need help:

- Open an [issue](https://github.com/kLaz3r/retroweb/issues) on GitHub
- Join our community discussions
- Check the [documentation](https://create.t3.gg/) for the T3 Stack

---

**Made with ❤️ for retro gaming enthusiasts**
