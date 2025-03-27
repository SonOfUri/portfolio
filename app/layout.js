import "@css/bootstrap.min.css";
import "@css/magnific-popup.css";
import "@css/slick.css";
import "@css/style.css";
import "@css/responsive.css";
import "@fontawsome/css/all.min.css";
import "@fontawsome/css/fontawesome.min.css";
import { Inter } from "next/font/google";
import "./globals.css";

import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SonofURI | Web3 Developer",
  description: "A Web3 Product Developer🖥️ specializing in UI/UX design, full-stack development, & smart contract engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/assets/img/logo/favicon.ico"/>
    </Head>
    <body>{children}</body>
    </html>
  );
}
