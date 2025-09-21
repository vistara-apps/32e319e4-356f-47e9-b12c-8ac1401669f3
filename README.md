# TipOnLike - Base MiniApp

Turn your likes into tips – effortlessly. A Base MiniApp that allows content creators to earn tips through 'like' interactions on their posts, fostering direct fan support.

## Features

- **Like-to-Tip Conversion**: Enables users to tip creators by liking their content
- **Creator Wallet Integration**: Secure Base wallet integration for receiving tips
- **Fan Appreciation & Gamification**: Badges and recognition for consistent support
- **Direct Creator Support**: Simple interface for fans to support creators

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and add your OnchainKit API key
   - Get your API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Next.js 15** with App Router
- **MiniKit** for Base integration
- **OnchainKit** for wallet functionality
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   ├── providers.tsx   # MiniKit and OnchainKit providers
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── CreatorOnboarding.tsx
│   ├── CreatorDashboard.tsx
│   ├── FanTipping.tsx
│   └── WelcomeScreen.tsx
├── lib/               # Utilities and types
│   ├── types.ts       # TypeScript interfaces
│   └── utils.ts       # Helper functions
└── public/            # Static assets
```

## Key Components

### Creator Flow
1. **Onboarding**: Connect Base wallet and set tip amounts
2. **Dashboard**: View earnings, manage posts, and configure settings
3. **Posts**: Create content with tipping enabled

### Fan Flow
1. **Discovery**: Browse posts from creators
2. **Tipping**: Like posts to automatically send tips
3. **Gamification**: Earn badges and track support history

## Environment Variables

```env
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
NEXT_PUBLIC_CHAIN_ID=8453
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org
```

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
