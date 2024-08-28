"use client"

import { Lato } from "next/font/google"
import { createTheme } from "@mantine/core"

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
})

export const theme = createTheme({
  fontFamily: lato.style.fontFamily,
  headings: {
    fontFamily: lato.style.fontFamily,
  },
  /* Put your mantine theme override here */
})
