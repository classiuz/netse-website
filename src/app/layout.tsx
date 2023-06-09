import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Inicio | NetSE',
  description: 'Description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
