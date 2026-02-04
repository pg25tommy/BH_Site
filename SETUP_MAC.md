# MacBook Setup Guide

This guide will help you set up the Burger Heaven project on your MacBook after working on it from your Windows PC.

## Prerequisites

Make sure you have these installed on your Mac:
- **Node.js** (v18 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Usually pre-installed on Mac, or install via [Homebrew](https://brew.sh/)
- **Code Editor** - VS Code, Cursor, or your preferred editor

## First-Time Setup on Mac

### 1. Clone the Repository

```bash
cd ~/Projects  # or wherever you keep your projects
git clone https://github.com/pg25tommy/BH_Site.git
cd BH_Site/burger-heaven-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Since `.env.local` is not tracked in Git (for security), you'll need to recreate it:

```bash
# Create .env.local file
cat > .env.local << 'EOF'
RESEND_API_KEY=re_gTAjKwTr_55VoNW9xnakzsmuFpQoGPiME
CONTACT_EMAIL=tommy@knocktwice.ca
EOF
```

Or manually create `.env.local` with:
```env
RESEND_API_KEY=re_gTAjKwTr_55VoNW9xnakzsmuFpQoGPiME
CONTACT_EMAIL=tommy@knocktwice.ca
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Ongoing Workflow (Switching Between PC and Mac)

### Before Starting Work

Always pull the latest changes first:

```bash
git pull
npm install  # In case dependencies changed
```

### After Making Changes

Standard git workflow:

```bash
git status                    # Check what changed
git add .                     # Stage changes
git commit -m "Your message"  # Commit
git push                      # Push to GitHub
```

## Line Ending Handling

The `.gitattributes` file is now configured to handle line endings automatically:
- Files are stored with **LF** (Unix-style) in the repository
- On checkout, Git will use the appropriate line endings for your OS
- You shouldn't see any CRLF warnings anymore

## Common Issues & Solutions

### Issue: `npm install` fails
**Solution**: Make sure you're using Node.js v18 or higher
```bash
node --version  # Should be v18.x.x or higher
```

### Issue: Port 3000 already in use
**Solution**: Kill the process or use a different port
```bash
lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
# OR
npm run dev -- -p 3001          # Use port 3001 instead
```

### Issue: Environment variables not working
**Solution**: Make sure `.env.local` exists and is formatted correctly
```bash
cat .env.local  # Should show your env vars
```

### Issue: Permission denied errors
**Solution**: You might need to fix permissions
```bash
sudo chown -R $(whoami) node_modules
```

## Mac-Specific Notes

- `.DS_Store` files are already in `.gitignore` - they won't be committed
- File paths use `/` instead of `\` - the code uses Node's `path` module which handles this automatically
- Case sensitivity: macOS file system is case-insensitive by default, but Linux (deployment) is case-sensitive. Be mindful of file/folder naming.

## API Key Security Note

⚠️ **IMPORTANT**: The Resend API key (`re_gTAjKwTr_55VoNW9xnakzsmuFpQoGPiME`) was previously exposed in source code and should be rotated:

1. Log in to [Resend Dashboard](https://resend.com/api-keys)
2. Delete the old API key
3. Generate a new API key
4. Update `.env.local` on both your PC and Mac with the new key
5. Update the key in Vercel's environment variables (if deployed)

## Deployment

The site auto-deploys to Vercel when you push to `main`. Make sure to update environment variables in Vercel if you rotate the API key:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Update `RESEND_API_KEY` and `CONTACT_EMAIL`

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking (if configured)

# Git
git status           # Check status
git log --oneline    # View commit history
git diff             # See changes
```

## Project Structure

```
burger-heaven-site/
├── src/
│   ├── app/              # Next.js App Router pages & API routes
│   ├── components/       # React components
│   ├── data/            # JSON data files
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions (including security.ts)
├── public/              # Static assets (images, etc.)
├── .env.local          # Environment variables (create this!)
├── .gitattributes      # Cross-platform line ending config
├── .gitignore          # Files to ignore in git
└── next.config.ts      # Next.js configuration
```

## Need Help?

- Check the main [README.md](README.md) for project details
- See [CHANGELOG.md](CHANGELOG.md) for recent changes
- View issues at [GitHub Issues](https://github.com/pg25tommy/BH_Site/issues)
