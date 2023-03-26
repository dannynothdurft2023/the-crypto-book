import React, { useState, useEffect } from "react";
import { Nav } from "./styled-components/generally";
import Link from "next/link";
import AmazonLinkButton from "./button/AmazonLinkButton";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav className={scrolled ? "navigation header-scolled" : "navigation"}>
      <div>
        <Link href="/">Home</Link>
        <AmazonLinkButton size="small" />
      </div>
    </Nav>
  );
}
