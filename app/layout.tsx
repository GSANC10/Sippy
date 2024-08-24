import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ui/theme-provider";

//----------------SWEET BABY JESUS------------------------------->
import "./globals.css";
//----------------SWEET BABY JESUS------------------------------->

//----------------COMPONENTS------------------------------->
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Controls from "./components/footer/controls";
//----------------COMPONENTS------------------------------->


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sippy - A sip of life!",
  description: "Web based map based !bereal for your computadora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <head>
        {/* Add metadata here */}
      </head>
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
          <Sidebar/>
          <Controls/>
        </ThemeProvider>
      </body>
    </html>
  );
}
