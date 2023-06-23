import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Daniel de Avila" />
        <meta name="language" content="en" />
        <meta name="description" content="¡Hola! Soy Daniel de Avila, un desarrollador frontend junior con experiencia en React.js, Next.js, TypeScript y JavaScript. Echa un vistazo a mi portafolio para conocer mis proyectos y habilidades." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="icon_laptop.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
