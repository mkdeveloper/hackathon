import { Navbar, Footer } from "@/components/sections";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
