import navLinks from "@/data/navLinks";
import Logo from "../common/Logo";
import TopNav from "../nav/TopNav";
import ThemeToggle from "../theme/ThemeToggle";
import Container from "../ui/Container";

const LeftHeader = () => {
  return (
    <a href="#home" className="relative">
      <img
        src="/images/profile-img.png"
        className="aspect-square h-12 rounded-full"
      />
      <Logo className="absolute top-1/2 left-25 -translate-x-1/2 -translate-y-1/2" />
    </a>
  );
};

const Header = () => {
  return (
    <header
      id="header"
      className="bg-background/70 sticky top-0 z-50 backdrop-blur-md"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <LeftHeader />

          <TopNav items={navLinks} offset={70} />

          <ThemeToggle className="border-none" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
