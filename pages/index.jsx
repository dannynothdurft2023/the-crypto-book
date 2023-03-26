import Head from "next/head";
import Image from "next/image";
import Header from "../components/home/Header";

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
        <div>
          <Image
            src={"/images/TCB_Cover.png"}
            alt="The CryptoBook - Lexikon / Cover"
            width={345}
            height={551}
          />
          <div>
            <h1>The CryptoBook - Lexikon</h1>

            <p>
              Willkommen auf dieser Webseite! Hier finden Sie alle Informationen
              rund um das Buch über Kryptowährungen. Als Lexikon konzipiert,
              bietet es Ihnen einen umfassenden Überblick über alle wichtigen
              Begriffe, die mit diesem spannenden Thema verbunden sind. Egal, ob
              Sie bereits in der Welt der Kryptowährungen unterwegs sind oder
              sich erst neu damit befassen möchten - dieses Buch liefert Ihnen
              die nötigen Informationen, um sich sicher und kompetent in diesem
              Bereich zu bewegen. Ich lade Sie herzlich ein, sich näher über das
              Buch &quot;The CryptoBook - Lexikon&quot; zu informieren und freue
              mich darauf, Sie als Leserinnen und Leser begrüßen zu dürfen.
            </p>

            <button>Zu Amazon</button>
          </div>
        </div>
      </main>
    </div>
  );
}
