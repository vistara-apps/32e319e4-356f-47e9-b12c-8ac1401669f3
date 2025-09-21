'use client';

import { Heart, Zap, Users } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface WelcomeScreenProps {
  onUserTypeSelect: (type: 'creator' | 'fan') => void;
}

export function WelcomeScreen({ onUserTypeSelect }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Tips on Like
            </h1>
            <p className="text-text-secondary">
              💙 Your on com Like
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <Card className="text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  Instant Tips
                </h3>
                <p className="text-sm text-text-secondary">
                  Turn likes into tips with one click. Support creators effortlessly.
                </p>
              </div>
            </div>
          </Card>

          <Card className="text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  Community Rewards
                </h3>
                <p className="text-sm text-text-secondary">
                  Earn badges and recognition for supporting your favorite creators.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => onUserTypeSelect('creator')}
            className="w-full"
            size="lg"
          >
            I'm a Creator
          </Button>
          <Button
            onClick={() => onUserTypeSelect('fan')}
            variant="outline"
            className="w-full"
            size="lg"
          >
            I'm a Fan
          </Button>
        </div>

        <p className="text-xs text-text-secondary">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
