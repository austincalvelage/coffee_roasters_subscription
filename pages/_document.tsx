import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:opsz,wght@9..144,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='mx-auto max-w-[1280px] px-3 md:px-5'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
