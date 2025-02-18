// /src/app/layout.tsx
import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header/Header';

// Load fonts using next/font/local
const digital7 = localFont({
  src: '../fonts/digital-7.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-digital7',
});

const inter = localFont({
  src: '../fonts/Inter.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
});

const neoneon = localFont({
  src: '../fonts/Neoneon.otf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-neoneon',
});

export const metadata = { title: 'Verafy Site' };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${digital7.variable} ${inter.variable} ${neoneon.variable}`}
        style={{
          margin: 0,
          background: "url('/images/hero-bg.jpg') no-repeat center/cover",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}




