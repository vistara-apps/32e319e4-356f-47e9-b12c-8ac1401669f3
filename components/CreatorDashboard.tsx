'use client';

import { useState } from 'react';
import { TrendingUp, Heart, DollarSign, Users, Settings, Eye } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { formatAmount, formatTimeAgo, generateMockData } from '../lib/utils';

export function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'posts' | 'settings'>('overview');
  const mockData = generateMockData();
  const creator = mockData.creators[0]; // Current user as creator

  const stats = [
    {
      label: 'Total Tips Received',
      value: formatAmount(creator.totalTipsReceived || 0, 'ETH'),
      icon: DollarSign,
      change: '+12%',
      positive: true,
    },
    {
      label: 'Total Likes',
      value: creator.totalLikes?.toString() || '0',
      icon: Heart,
      change: '+8%',
      positive: true,
    },
    {
      label: 'Active Posts',
      value: mockData.posts.length.toString(),
      icon: Eye,
      change: '+2',
      positive: true,
    },
    {
      label: 'Tip Rate',
      value: '100%',
      icon: TrendingUp,
      change: 'Perfect!',
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-text-secondary/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {creator.username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-text-primary">
                  {creator.username}
                </h1>
                <p className="text-text-secondary">Creator Dashboard</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-8 bg-surface rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'posts', label: 'Posts' },
            { id: 'settings', label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        stat.positive
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Recent Tips
              </h3>
              <div className="space-y-3">
                {mockData.posts.map((post) => (
                  <div
                    key={post.postId}
                    className="flex items-center justify-between p-3 bg-background rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-text-primary font-medium">
                          {post.tips} tips received
                        </p>
                        <p className="text-sm text-text-secondary">
                          {formatTimeAgo(post.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-text-primary font-medium">
                        {formatAmount(post.tipAmount * post.tips, 'ETH')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-text-primary">
                Your Posts
              </h2>
              <Button>Create New Post</Button>
            </div>

            <div className="grid gap-4">
              {mockData.posts.map((post) => (
                <Card key={post.postId} hover>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-text-primary mb-2">{post.content}</p>
                        <p className="text-sm text-text-secondary">
                          {formatTimeAgo(post.timestamp)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-text-primary font-medium">
                          {formatAmount(post.tipAmount, 'ETH')} per like
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 pt-3 border-t border-text-secondary/10">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-accent" />
                        <span className="text-sm text-text-secondary">
                          {post.likes} likes
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-text-secondary">
                          {post.tips} tips
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-text-primary">
              Creator Settings
            </h2>

            <Card>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Tip Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Default Tip Amount per Like
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      defaultValue={creator.tipAmountPerLike}
                      step="0.001"
                      min="0.001"
                      className="flex-1 px-3 py-2 bg-background border border-text-secondary/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <select
                      defaultValue={creator.currency}
                      className="px-3 py-2 bg-background border border-text-secondary/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="ETH">ETH</option>
                      <option value="USDC">USDC</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-primary font-medium">
                      Enable Tipping
                    </p>
                    <p className="text-sm text-text-secondary">
                      Allow fans to tip you through likes
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={creator.isActive}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-text-secondary/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <Button className="w-full">Save Settings</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Wallet Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-text-secondary mb-1">
                    Connected Wallet
                  </p>
                  <p className="text-text-primary font-mono text-sm">
                    {creator.baseWalletAddress.slice(0, 20)}...
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Change Wallet
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
