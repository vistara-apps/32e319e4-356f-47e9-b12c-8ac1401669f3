import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatAmount(amount: number, currency: string): string {
  if (currency === 'ETH') {
    return `${amount.toFixed(6)} ETH`;
  }
  return `$${amount.toFixed(2)} ${currency}`;
}

export function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export function generateMockData() {
  return {
    creators: [
      {
        farcasterId: '1',
        baseWalletAddress: '0x1234567890123456789012345678901234567890',
        username: 'cryptoartist',
        tipAmountPerLike: 0.001,
        currency: 'ETH' as const,
        isActive: true,
        avatar: 'https://via.placeholder.com/100',
        bio: 'Digital artist creating NFTs and crypto art',
        totalTipsReceived: 0.045,
        totalLikes: 45,
      },
      {
        farcasterId: '2',
        baseWalletAddress: '0x2345678901234567890123456789012345678901',
        username: 'devcreator',
        tipAmountPerLike: 0.002,
        currency: 'ETH' as const,
        isActive: true,
        avatar: 'https://via.placeholder.com/100',
        bio: 'Building the future of web3',
        totalTipsReceived: 0.088,
        totalLikes: 44,
      },
    ],
    posts: [
      {
        postId: '1',
        creatorId: '1',
        contentUrl: 'https://example.com/post1',
        tipAmount: 0.001,
        content: 'Just dropped my latest NFT collection! 🎨✨',
        timestamp: Date.now() - 3600000,
        likes: 23,
        tips: 23,
      },
      {
        postId: '2',
        creatorId: '2',
        contentUrl: 'https://example.com/post2',
        tipAmount: 0.002,
        content: 'New smart contract deployment on Base! 🚀',
        timestamp: Date.now() - 7200000,
        likes: 18,
        tips: 18,
      },
    ],
  };
}
