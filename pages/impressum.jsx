import React from "react";
import Head from "next/head";

export default function Impressum() {
  return (
    <div className="impressum-page">
      <Head>
        <title>CryptoBook - Impressum</title>
      </Head>
      <main>
        <h1>Impressum</h1>
        <div className="box">
          <h2>Angaben gemäß § 5 TMG</h2>
          <h3>CryptoBook</h3>
          <p>Danny Nothdurft</p>
          <p>Tribünenweg 32</p>
          <p>22111 Hamburg</p>
        </div>
        <div className="box">
          <h2>Kontakt</h2>
          <p>Telefon: +49 176 / 566 121 13</p>
          <p>E-Mail: danny.nothdurft@icloud.com</p>
        </div>
      </main>
    </div>
  );
}
