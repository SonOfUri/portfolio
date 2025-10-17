import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SonofURI | Web3 Developer",
  description: "A Web3 Product Developer🖥️ specializing in UI/UX design, full-stack development, & smart contract engineering.",
  icons: {
    icon: [
      { url: "/assets/img/logo/favicon.ico" },
      { url: "/assets/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/img/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/assets/img/apple-touch-icon.png", sizes: "180x180" }
    ]
  },
  manifest: "/assets/img/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
