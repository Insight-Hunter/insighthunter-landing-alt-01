// components/PWAInstallPrompt.tsx
'use client';
import { useEffect, useState } from 'react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = () => {
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then(() => setShow(false));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-50 md:hidden animate-fadeIn">
      <img src="/icon-192.png" alt="InsightHunter" className="w-12 h-12 rounded-lg" />
      <div className="flex-1">
        <p className="font-semibold text-sm">Add InsightHunter to Home Screen</p>
        <p className="text-xs text-gray-600">Get insights faster, even offline</p>
      </div>
      <button onClick={handleInstall} className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
        Install
      </button>
      <button onClick={() => setShow(false)} className="text-gray-500 text-xl">×</button>
    </div>
  );
}
