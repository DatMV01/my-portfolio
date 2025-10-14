import React from "react";
import Container from "../ui/Container";
import ThemeToggle from "../theme/ThemeToggle";

const Header = () => {
  return (
    <header id="header">
      <Container>
        <div className="border-border flex h-16 items-center justify-center border-b">
          Header
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;
