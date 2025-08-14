'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/personal-info';
import { Github, Linkedin, Twitter, Copy, Check, Mail } from 'lucide-react';
import NewsletterModal from './newsletter-modal';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <footer className="py-8 sm:py-10 border-t border-gray-800/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            found a bug, want to collaborate, or just want to chat about code?
          </p>

          <div className="mt-4 inline-flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              {personalInfo.social.email}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-gray-500 hover:text-amber-300 transition-colors"
              aria-label="Copy email"
              title="Copy email"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <span aria-live="polite" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setShowModal(true)}
              className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/30 hover:decoration-amber-300/50 text-xs sm:text-sm transition-colors"
              aria-label="Open newsletter subscription"
            >
              subscribe ^_^
            </button>
          </div>

          <p className="text-xs text-gray-600 italic mt-3">
            (carrier pigeons work too, but expect some latency)
          </p>

          <div className="mt-6 flex items-center justify-center gap-5">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-300 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-300 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-300 transition-colors"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          <div className="mt-6">
            <p className="text-xs text-gray-600">© 2025 • made with ❤️ — arch btw; with pacman, tiling, panes, and buffers &gt; tabs; :wq ^_^</p>
          </div>
        </div>
      </footer>

      <NewsletterModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}