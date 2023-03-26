import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import AmazonLinkButton from "../button/AmazonLinkButton";

function Product() {
  const Cover = new CloudinaryImage("TCB_Cover", {
    cloudName: "dca67w0ia",
  }).resize(fill().width(345).height(551));

  return (
    <div className="product-component">
      <AdvancedImage cldImg={Cover} />
      <div>
        <p>
          Willkommen auf dieser Webseite! Hier finden Sie alle Informationen
          rund um das Buch über Kryptowährungen. Als Lexikon konzipiert, bietet
          es Ihnen einen umfassenden Überblick über alle wichtigen Begriffe, die
          mit diesem spannenden Thema verbunden sind. Egal, ob Sie bereits in
          der Welt der Kryptowährungen unterwegs sind oder sich erst neu damit
          befassen möchten - dieses Buch liefert Ihnen die nötigen
          Informationen, um sich sicher und kompetent in diesem Bereich zu
          bewegen. Ich lade Sie herzlich ein, sich näher über das Buch &quot;The
          CryptoBook - Lexikon&quot; zu informieren und freue mich darauf, Sie
          als Leserinnen und Leser begrüßen zu dürfen.
        </p>

        <AmazonLinkButton />
      </div>
    </div>
  );
}

export default Product;
