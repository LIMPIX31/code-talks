import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ThemeRegistry from './theme-registry'

const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeTalks',
  description: 'To code to talk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pjs.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
	        {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
