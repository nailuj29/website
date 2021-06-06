import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nailuj29 Site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Nailuj29 Site"/>
        <meta name="og:url" content="https://nailuj29gaming.com" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://static-cdn.jtvnw.net/jtv_user_pictures/96195cfe-f99c-48aa-a15a-56d3984e8fc6-profile_image-70x70.png" />
      </Head>

      <main>
        <Header title="Welcome to my website" />
        <p className="description">
          I am nailuj. I make <a href="/stuff-ive-made">stuff</a> sometimes
        </p>
        <h2>Crypto:</h2>
        RVN: <pre>REMmZ47rwFZPumajKJvqVgFzZqwnz7hyg6</pre> <br />
        DOGE: <pre>DFUiTucjnJp1kvbF3F4TF7CR2nxS74SGMy</pre> <br />
        ETH: <pre>0xfABa9C1c9c36fC0b2A4F90a31eaA54Db3c44eE2B</pre> <br />
        <br />
        <Footer />
      </main>
    </div>
  )
}
