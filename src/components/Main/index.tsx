import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Main = ({ children }: { children: ReactNode }) => (
  <>
    <Header blogName="Blog NextJS" />
    <main className="bg-slate-900 min-h-screen">
      <div className="container lg:px-56 px-4">{children}</div>
    </main>
    <Footer />
  </>
);
