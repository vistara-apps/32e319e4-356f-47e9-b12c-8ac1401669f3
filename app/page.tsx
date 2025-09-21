'use client';

import { useState, useEffect } from 'react';
import { CreatorOnboarding } from '../components/CreatorOnboarding';
import { CreatorDashboard } from '../components/CreatorDashboard';
import { FanTipping } from '../components/FanTipping';
import { WelcomeScreen } from '../components/WelcomeScreen';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export default function Home() {
  const [userType, setUserType] = useState<'creator' | 'fan' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
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
    return <CreatorOnboarding />;
  }

  return <FanTipping />;
}
