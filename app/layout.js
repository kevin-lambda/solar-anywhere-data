import "bulma/css/bulma.min.css"
import "./globals.css"
import { Footer, Navbar } from "@/components/other-components"

export const metadata = {
  title: "Solari",
  description: "Solar energy analysis tool",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
