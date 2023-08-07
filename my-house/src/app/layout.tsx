import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";

export const metadata: Metadata = {
  title: 'My House',
  description: 'House organization app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
