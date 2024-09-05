"use client"

import { usePathname, useRouter } from "next/navigation"
import { Anchor, Group } from "@mantine/core"

import { ColorSchemeToggle } from "@src/components/ColorSchemeToggle/ColorSchemeToggle"
import classes from "@src/components/TopBar/TopBar.module.css"

export function TopBar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (pathname === "/") {
      // If we're on the homepage, scroll to the section
      const element = document.getElementById(href.slice(1))
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      // If we're on a different page, navigate to the homepage and then scroll
      router.push("/")
      setTimeout(() => {
        const element = document.getElementById(href.slice(1))
        element?.scrollIntoView({ behavior: "smooth" })
      }, 100) // Small delay to ensure the page has loaded
    }
  }

  return (
    <Group className={classes.topbar}>
      <Anchor href='#about' onClick={e => handleClick(e, "#about")} className={classes.link}>
        ABOUT
      </Anchor>
      <Anchor href='#work' onClick={e => handleClick(e, "#work")} className={classes.link}>
        WORK
      </Anchor>
      <Anchor href='#blog' onClick={e => handleClick(e, "#blog")} className={classes.link}>
        BLOG
      </Anchor>
      <Anchor href='#contact' onClick={e => handleClick(e, "#contact")} className={classes.link}>
        CONTACT
      </Anchor>
      <ColorSchemeToggle />
    </Group>
  )
}
