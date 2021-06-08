import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Stuff() {
  return (
    <div className="container">
        <Head>
            <title>Things I've made</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header title="Stuff I've made" />
            <h2>Esolangs</h2>
            <ul>
                <li><a href="https://github.com/LengthLang/length">Length</a></li>
            </ul>
            <h2>Web Stuff</h2>
            <ul>
                <li><a href="https://github.com/nailuj29gaming/paste">Nailujbin</a></li>
                <li><a href="https://github.com/SpiderWren/SpiderWren">SpiderWren</a></li>
                <li><a href="https://github.com/nailuj29gaming/website">This site</a></li>
            </ul>
            <h2>Discord Bots</h2>
            <ul>
                <li><a href="https://top.gg/bot/752236008497479821">DAndDBot</a></li>
                <li><a href="https://top.gg/bot/535636428449644552#/">PollsBot</a></li>
                <li><a href="https://github.com/nailuj29gaming/join-leave">JoinLeave (too lazy for verification)</a></li>
            </ul>
            <Footer />
        </main>
    </div>
  )
}