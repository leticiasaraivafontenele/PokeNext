import { Inter } from "next/font/google";
import NavBar from "@/app/components/layout/NavBar";
import Footer from "@/app/components/layout/Footer";
// import Head from "next/head";
import ".//globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeNext",
  description: "Pokedext em next",
  icons: {
    shortcut: "shortcut icon",
    icon: "/images/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* <Head>
        <link rel="shortcut icon" href="/image/favicon.ico"/>
      </Head> */}
      <body className={`${inter.main_conatiner}`}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
