"use client"

import { Montserrat, Roboto } from "next/font/google"
import { createTheme } from "@mantine/core"

const appFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  // weight: ["100", "300", "400", "700", "900"],
})

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const theme = createTheme({
  fontFamily: roboto.style.fontFamily,
  headings: {
    fontFamily: appFont.style.fontFamily,
  },
  /* Put your mantine theme override here */
})
