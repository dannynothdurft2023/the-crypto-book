import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <p>© CryptoBook 2023</p>
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
    </div>
  );
}
