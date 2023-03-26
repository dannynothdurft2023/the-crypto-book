import React from "react";
import styled from "styled-components";

function AmazonLinkButton({ size }) {
  return (
    <Button
      href="https://www.amazon.de/CryptoBook-Lexikon-Alle-Begriffe-Kryptow%C3%A4hrung/dp/B094NTGLSM/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=332X0SE9WDIE6&keywords=The+CryptoBook&qid=1679825118&sprefix=the+cryptobook%2Caps%2C100&sr=8-1"
      target="_blank"
      rel="noopener noreferrer"
      size={size}
    >
      Kaufen bei Amazon
    </Button>
  );
}

export default AmazonLinkButton;

const Button = styled.a`
  display: inline-block;
  padding: ${(props) => {
    if (props.size === "small") return "3px 10px";
    if (props.size === "large") return "12px 28px";
    return "8px 20px"; // default value
  }};
  font-size: ${(props) => {
    if (props.size === "small") return "12px";
    if (props.size === "large") return "20px";
    return "16px"; // default value
  }};
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  background-color: #ff9900;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ffb700;
  }
`;
