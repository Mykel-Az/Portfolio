import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-[#e2e0db]">
      {children}
    </div>
  );
}
