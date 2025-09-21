'use client';

import { useState } from 'react';
import { Wallet, Settings, Zap, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { useMiniKit } from '@coinbase/minikit';

export function CreatorOnboarding() {
  const { context } = useMiniKit();
  const [currentStep, setCurrentStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);
  const [tipAmount, setTipAmount] = useState('0.001');
  const [currency, setCurrency] = useState<'ETH' | 'USDC'>('ETH');

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      setCurrentStep(2);
    }, 2000);
  };

  const handleSetupComplete = () => {
    setCurrentStep(3);
    // Simulate saving settings
    setTimeout(() => {
      window.location.reload(); // This would normally navigate to dashboard
    }, 1500);
  };

  const steps = [
    {
      id: 1,
      title: 'Connect Your Wallet',
      description: 'Link your Base wallet to receive tips',
      icon: Wallet,
    },
    {
      id: 2,
      title: 'Set Tip Amount',
      description: 'Choose how much fans tip per like',
      icon: Settings,
    },
    {
      id: 3,
      title: 'Ready to Go!',
      description: 'Your account is set up successfully',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        {/* Progress */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.id
                    ? 'bg-accent text-white'
                    : 'bg-surface border border-text-secondary/20 text-text-secondary'
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-accent' : 'bg-text-secondary/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Current Step Content */}
        <Card>
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-text-secondary">
                {steps[currentStep - 1].description}
              </p>
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent">
                    We'll connect to your Base wallet to enable secure tip payments.
                  </p>
                </div>
                <Button
                  onClick={handleConnectWallet}
                  loading={isConnecting}
                  className="w-full"
                  size="lg"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Base Wallet'}
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Tip Amount per Like
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={tipAmount}
                        onChange={(e) => setTipAmount(e.target.value)}
                        step="0.001"
                        min="0.001"
                        className="flex-1 px-3 py-2 bg-background border border-text-secondary/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="0.001"
                      />
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as 'ETH' | 'USDC')}
                        className="px-3 py-2 bg-background border border-text-secondary/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                      >
                        <option value="ETH">ETH</option>
                        <option value="USDC">USDC</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary">
                      Fans will tip {tipAmount} {currency} each time they like your content.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleSetupComplete}
                  className="w-full"
                  size="lg"
                >
                  Complete Setup
                </Button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-text-primary font-medium">
                    Your creator account is ready!
                  </p>
                  <p className="text-sm text-text-secondary">
                    Start sharing content and earning tips from your fans.
                  </p>
                </div>
                <div className="animate-pulse">
                  <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto" />
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* User Info */}
        {context?.user && (
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              Setting up account for{' '}
              <span className="text-text-primary font-medium">
                {context.user.displayName || 'User'}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
