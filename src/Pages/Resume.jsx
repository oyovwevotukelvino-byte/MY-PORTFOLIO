import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-black px-4 md:px-6">
      <main className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Resume</h1>
        <p className="text-slate-400 text-lg mb-8">Resume download link will be connected in the next phase.</p>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/50 text-white font-semibold"
          onClick={(e) => e.preventDefault()}
        >
          Download Resume
        </a>
      </main>
    </div>
  );
}

