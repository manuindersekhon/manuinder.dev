import Link from "next/link"
import { Anchor, Button, Group } from "@mantine/core"
import { IconHome } from "@tabler/icons-react"

import { ColorSchemeToggle } from "@src/components/ColorSchemeToggle/ColorSchemeToggle"
import classes from "@src/components/TopBar/TopBar.module.css"

export function TopBar() {
  return (
    <Group className={classes.topbar}>
      <Anchor component={Link} href='/'>
        <Button px={0} m={0} variant='subtle' color='var(--mantine-color-text)' size='xs'>
          <IconHome size={18} />
        </Button>
      </Anchor>
      <Anchor component={Link} href='/about' className={classes.link}>
        ABOUT
      </Anchor>
      <Anchor component={Link} href='/work' className={classes.link}>
        WORK
      </Anchor>
      <Anchor component={Link} href='/blog' className={classes.link}>
        BLOG
      </Anchor>
      <Anchor component={Link} href='/contact' className={classes.link}>
        CONTACT
      </Anchor>
      <ColorSchemeToggle />
    </Group>
  )
}
