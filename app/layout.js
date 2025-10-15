import { Geist, Geist_Mono, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import clsx from "clsx";
import ScrollSpyNav from "@/components/nav/ScrollSpyNav";
import navLinks from "@/data/navLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "DatMai - Portfolio",
  description: "DatMai - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          ovo.variable,
          "font-ovo antialiased",
        )}
      >
        <ThemeProvider>
          <Header />

          <main>
            <Container>{children}</Container>
          </main>

          <Footer />

          <ScrollSpyNav items={navLinks} offset={70} />
        </ThemeProvider>
      </body>
    </html>
  );
}
