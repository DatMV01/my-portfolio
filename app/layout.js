import { Geist, Geist_Mono, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className={`${geistSans.variable} ${geistMono.variable} ${ovo.variable} antialiased`}
      >
        <ThemeProvider>
          <header className="font-ovo p-4">header</header>

          <main className="min-h-screen p-6">{children}</main>

          <footer className="font-ovo p-4 text-center">
            © {new Date().getFullYear()} Dat Mai's Portfolio. All rights
            reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
