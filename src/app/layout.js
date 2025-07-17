import './globals.css';
import NavMenu from '@/app/bricks/Navbar';

export const metadata = {
  title: 'Musabbir Real',
  description: 'My ultimate portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-800">
        <NavMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
