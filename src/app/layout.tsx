import "@mantine/core/styles.css"
import "@src/styles/globals.css"

import React from "react"
import { Montserrat } from "next/font/google"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"

import { theme } from "@src/lib/theme"

export const metadata = {
  title: "Manuinder Sekhon",
  description: "Personal website for Manuinder Sekhon",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }: Readonly<{ children: any }>) {
  return (
    <html lang='en' className={montserrat.className} data-mantine-color-scheme='light'>
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body className={montserrat.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
