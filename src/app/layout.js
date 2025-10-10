import Navbar from '@/components/Navbar/navbar';
import './globals.css';

export const metadata = {
  title: 'StatsDiscovery App',
  description: 'SEO Audit & Reporting Tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

