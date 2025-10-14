import React from "react";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <div className="border-border flex h-16 items-center justify-center border-t">
          © {new Date().getFullYear()} Dat Mai's Portfolio. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
