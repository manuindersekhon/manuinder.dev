"use client"

import { useEffect, useState } from "react" // Add this import
import { Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"

import { ErrorBoundary } from "@src/components/ErrorBoundary/ErrorBoundary"

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true })
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true })
  const [initialRender, setInitialRender] = useState(false) // Add this line

  useEffect(() => {
    setInitialRender(true)
  }, [])

  if (!initialRender) {
    return null // Return null on initial render to prevent hydration mismatch
  }

  return (
    <ErrorBoundary>
      <Button
        px={5}
        m={0}
        variant='subtle'
        color='var(--mantine-color-text)'
        size='xs'
        onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
      >
        {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
      </Button>
    </ErrorBoundary>
  )
}
