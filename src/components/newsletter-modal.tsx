'use client';

import { useState } from 'react';
import { Mail, X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#0a0a0a] border border-gray-800/60 rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <Mail className="mx-auto mb-3 text-amber-400" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">stay in the loop</h3>
          <p className="text-gray-400 text-sm">
            get occasional updates about new projects and things i break while coding ^_^
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.dev"
              className="flex-1 px-4 py-2 bg-gray-900/40 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all"
              disabled={status === 'loading'}
              autoFocus
            />
            
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="px-3 py-2 bg-amber-500/15 text-amber-400 border border-amber-500/25 rounded-lg font-medium hover:bg-amber-500/25 disabled:opacity-50 transition-all whitespace-nowrap"
            >
              {status === 'loading' ? 'sending...' : status === 'success' ? 'done!' : 'subscribe'}
            </button>
          </div>
          
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">please enter a valid email</p>
          )}
          {status === 'success' && (
            <p className="text-green-400 text-sm text-center">welcome to the chaos! :p</p>
          )}
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          no spam, just occasional updates :p
        </p>
      </div>
    </div>
  );
}