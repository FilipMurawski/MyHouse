import { Metadata } from "next";
import Link from "next/link";

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
      <body>
        <nav className="navbar">
          <Link href={"/"}>Logo</Link>
          <ul className="navbar__list">
            <li className="navbar__link">Finances</li>
            <li className="navbar__link">Food</li>
            <li className="navbar__link">TODO Lists</li>
            <li className="navbar__link">Calendar</li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  )
}
