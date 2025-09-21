export interface Creator {
  farcasterId: string;
  baseWalletAddress: string;
  username: string;
  tipAmountPerLike: number;
  currency: 'ETH' | 'USDC';
  isActive: boolean;
  avatar?: string;
  bio?: string;
  totalTipsReceived?: number;
  totalLikes?: number;
}

export interface Post {
  postId: string;
  creatorId: string;
  contentUrl: string;
  transactionHash?: string;
  tipAmount: number;
  content: string;
  timestamp: number;
  likes: number;
  tips: number;
}

export interface FanTippingSession {
  fanFarcasterId: string;
  postId: string;
  tipAmountUsd: number;
  tipAmountAsset: number;
  timestamp: number;
  transactionHash?: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface TipStats {
  totalTipped: number;
  totalPosts: number;
  favoriteCreators: string[];
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: number;
}

export interface TipTransaction {
  id: string;
  fromAddress: string;
  toAddress: string;
  amount: number;
  currency: string;
  postId: string;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
  transactionHash?: string;
}
