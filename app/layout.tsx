import './globals.css'
import {Footer, Navbar} from "@/components";

export const metadata = {
  title: 'Auto Gallery',
  description: 'Explore the best cars in the Europe!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
