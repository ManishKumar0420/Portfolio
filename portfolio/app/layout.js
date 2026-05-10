import './globals.css';

export const metadata = {
  title: 'Manish Kumar — Full Stack Developer',
  description:
    'Portfolio of Manish Kumar — Full Stack Developer specialising in Node.js, React.js / Next.js, PostgreSQL, MongoDB, ERP & AI/ML.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
