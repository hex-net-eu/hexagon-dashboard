import { useState } from 'react';
import { HexagonDashboard } from '@/components/HexagonDashboard';
import { AISettingsPage } from '@/components/AISettingsPage';
import { SocialMediaPage } from '@/components/SocialMediaPage';
import { ImageGeneratorPage } from '@/components/ImageGeneratorPage';
import { DebugLoggerPage } from '@/components/DebugLoggerPage';
import { SettingsPage } from '@/components/SettingsPage';
import { HelpPage } from '@/components/HelpPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'ai-settings':
        return <AISettingsPage />;
      case 'social-media':
        return <SocialMediaPage />;
      case 'image-generator':
        return <ImageGeneratorPage />;
      case 'debug-logger':
        return <DebugLoggerPage />;
      case 'settings':
        return <SettingsPage />;
      case 'help':
        return <HelpPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {currentPage === 'dashboard' ? (
        <HexagonDashboard currentPage={currentPage} onPageChange={setCurrentPage} />
      ) : (
        <div className="flex">
          <div className="w-64 border-r bg-gradient-card min-h-screen">
            <nav className="p-4 space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'ai-settings', label: 'AI Settings' },
                { id: 'social-media', label: 'Social Media' },
                { id: 'image-generator', label: 'Image Generator' },
                { id: 'debug-logger', label: 'Debug Logger' },
                { id: 'settings', label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full text-left p-2 rounded ${
                    currentPage === item.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-1 p-6">
            {renderPageContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
