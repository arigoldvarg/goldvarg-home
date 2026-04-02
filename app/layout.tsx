import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Goldvarg Ingeniería',
  description: 'Productividad, capacidad y nivel de servicio para operaciones que necesitan escalar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
