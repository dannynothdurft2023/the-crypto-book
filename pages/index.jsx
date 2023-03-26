import Head from "next/head";
import Header from "../components/home/Header";
import Product from "../components/home/Product";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The CryptoBook - Lexikon</title>
        <meta
          name="description"
          content="Unser umfassendes Lexikon zum Thema Kryptowährungen erklärt alle wichtigen Begriffe einfach und verständlich. Werden Sie zum Experten für Bitcoin, Blockchain und Co. Jetzt bestellen!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="start-page">
        <Header />
        <Product />
      </main>
    </div>
  );
}
