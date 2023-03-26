import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <Image
        src="/images/header.jpg"
        alt="The CryptoBook Header Bild"
        layout="fill"
        objectFit="cover"
      />

      <div className="header-text">
        <h1>The CryptoBook</h1>
        <h2>Das Lexikon</h2>
      </div>
    </div>
  );
}

export default Header;
