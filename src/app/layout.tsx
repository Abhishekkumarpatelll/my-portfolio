// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'My Portfolio | Software Developer',
//   description: 'A personal portfolio showcasing my projects, experience, and skills as a full-stack developer.',
//   icons: {
//     icon: '/favicon.ico',
//   },
//   openGraph: {
//     title: 'My Portfolio | Software Developer',
//     description: 'Explore my work, technical skills, and development journey.',
//     url: 'https://yourdomain.com',
//     siteName: 'My Developer Portfolio',
//     images: [
//       {
//         url: '/og-image.png',
//         width: 1200,
//         height: 630,
//         alt: 'Portfolio preview image',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} bg-white text-gray-900 dark:bg-zinc-900 dark:text-white`}>
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // ✅ Change this to your actual domain in production
  title: 'My Portfolio | Software Developer',
  description:
    'A personal portfolio showcasing my projects, experience, and skills as a full-stack developer.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'My Portfolio | Software Developer',
    description: 'Explore my work, technical skills, and development journey.',
    url: 'http://localhost:3000', // or 'https://yourdomain.com'
    siteName: 'My Developer Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-zinc-900 dark:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
