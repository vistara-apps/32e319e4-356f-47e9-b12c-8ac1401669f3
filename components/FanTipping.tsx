'use client';

import { useState } from 'react';
import { Heart, Zap, Trophy, Star, TrendingUp } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { formatAmount, formatTimeAgo, generateMockData } from '../lib/utils';

export function FanTipping() {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isLiking, setIsLiking] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);
  const mockData = generateMockData();

  const handleLikeWithTip = async (post: any) => {
    setIsLiking(true);
    setSelectedPost(post);
    setShowTipModal(true);
    
    // Simulate transaction
    setTimeout(() => {
      setIsLiking(false);
      setShowTipModal(false);
      setSelectedPost(null);
      // Update post likes count (in real app, this would be handled by state management)
    }, 3000);
  };

  const fanStats = {
    totalTipped: 0.025,
    postsLiked: 12,
    creatorsSupported: 3,
    badges: [
      { name: 'Early Supporter', icon: '🌟' },
      { name: 'Generous Tipper', icon: '💎' },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-text-secondary/10">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Discover & Support
            </h1>
            <p className="text-text-secondary">
              Like posts to tip creators instantly
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Fan Stats */}
        <Card className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Your Impact
            </h2>
            <div className="flex gap-1">
              {fanStats.badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-lg"
                  title={badge.name}
                >
                  {badge.icon}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">
                {formatAmount(fanStats.totalTipped, 'ETH')}
              </p>
              <p className="text-xs text-text-secondary">Total Tipped</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {fanStats.postsLiked}
              </p>
              <p className="text-xs text-text-secondary">Posts Liked</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">
                {fanStats.creatorsSupported}
              </p>
              <p className="text-xs text-text-secondary">Creators Supported</p>
            </div>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-text-primary">
            Latest Posts
          </h2>

          {mockData.posts.map((post) => {
            const creator = mockData.creators.find(c => c.farcasterId === post.creatorId);
            if (!creator) return null;

            return (
              <Card key={post.postId} className="space-y-4">
                {/* Creator Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {creator.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-text-primary">
                      {creator.username}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {formatTimeAgo(post.timestamp)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-accent font-medium">
                      {formatAmount(post.tipAmount, 'ETH')} per like
                    </p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="py-2">
                  <p className="text-text-primary">{post.content}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-text-secondary/10">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-text-secondary" />
                      <span className="text-sm text-text-secondary">
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-sm text-text-secondary">
                        {post.tips} tips
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleLikeWithTip(post)}
                    className="flex items-center gap-2"
                    size="sm"
                  >
                    <Heart className="w-4 h-4" />
                    Like & Tip
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trending Creators */}
        <Card className="mt-8">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Trending Creators
          </h3>
          <div className="space-y-3">
            {mockData.creators.map((creator, index) => (
              <div
                key={creator.farcasterId}
                className="flex items-center justify-between p-3 bg-background rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {creator.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">
                      {creator.username}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {creator.totalLikes} likes received
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-text-primary">
                    #{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Tip Confirmation Modal */}
      <Modal
        isOpen={showTipModal}
        onClose={() => setShowTipModal(false)}
        title="Confirming Tip"
      >
        {selectedPost && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-accent animate-pulse" />
            </div>
            
            <div>
              <p className="text-text-primary font-medium mb-2">
                Sending tip to creator
              </p>
              <p className="text-2xl font-bold text-accent">
                {formatAmount(selectedPost.tipAmount, 'ETH')}
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-accent">
                Your like will be recorded and the tip will be sent to the creator's wallet.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
