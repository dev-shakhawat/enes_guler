import { Bricolage_Grotesque , Poppins } from "next/font/google";

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"; 
import Nav from "@/components/common/nav";
import ScrollingPromotionTop from "@/components/common/scrolling-promotion";
import Footer from "@/components/sections/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", bricolageGrotesque.variable, poppins.variable)}
      
    >
      <body cz-shortcut-listen="true" >
        <ThemeProvider>
          <ScrollingPromotionTop/>
          <Nav/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
