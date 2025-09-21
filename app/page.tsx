'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { useAuthenticate } from '@coinbase/onchainkit/minikit';
import { CreatorOnboarding } from '../components/CreatorOnboarding';
import { CreatorDashboard } from '../components/CreatorDashboard';
import { FanTipping } from '../components/FanTipping';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export default function Home() {
  const { context } = useMiniKit();
  const { user } = useAuthenticate();
  const [userType, setUserType] = useState<'creator' | 'fan' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and determine user type based on context
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!userType) {
    return <WelcomeScreen onUserTypeSelect={setUserType} />;
  }

  if (userType === 'creator') {
    if (!user) {
      return <CreatorOnboarding />;
    }
    return <CreatorDashboard />;
  }

  return <FanTipping />;
}
