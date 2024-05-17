import Head from 'next/head';

export const metadata = {
  title: 'Calculadora NEXTJS',
  description: 'Calculadora hecha en NEXTJS'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Head>
        <link rel='shortcut icon' href='/calculadora.ico' />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
