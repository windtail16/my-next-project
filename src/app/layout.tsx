import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigation">
          <div className="nav-container">
            <div className="nav-content">
              <Link href="/" className="logo">
                WINDTAIL16
              </Link>
              <div className="nav-links">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
                <Link href="/resume" className="nav-link">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
