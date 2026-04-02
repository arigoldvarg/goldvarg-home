import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Goldvarg Ingeniería',
  description: 'Mejora de operaciones para aumentar eficiencia, capacidad, ordenar el flujo y sostener el nivel de servicio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
