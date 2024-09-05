import "@mantine/core/styles.css"
import "@src/styles/globals.css"

import React from "react"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"

import { theme } from "@src/lib/theme"

export const metadata = {
  title: "Manuinder Sekhon",
  description: "Personal website for Manuinder Sekhon",
}

export default function RootLayout({ children }: Readonly<{ children: any }>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <meta charSet='utf-8' name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
