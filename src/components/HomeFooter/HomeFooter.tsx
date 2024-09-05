// return <footer>© {new }  Manuinder Sekhon</footer>

import { Group, Text } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"

export function HomeFooter() {
  const currentYear = new Date().getFullYear()
  const lts = "0.08rem"

  return (
    <footer>
      <Group justify='center' gap='xs'>
        <Text size='xs' lts={lts}>
          Built with <IconHeart size={14} style={{ display: "inline", verticalAlign: "text-bottom" }} />
        </Text>
        <Text size='xs'>·</Text>
        <Text size='xs' lts={lts}>
          Manuinder Sekhon
        </Text>
        <Text size='xs'>·</Text>
        <Text size='xs' lts={lts}>
          © {currentYear}
        </Text>
      </Group>
      <Group justify='center' mt='0.2rem'>
        <Text size='xs' lts={lts}>
          Theme inspired by{" "}
          <a href='https://www.joseocando.com/' style={{ color: "inherit", textDecoration: "underline" }}>
            Jose Ocando
          </a>
        </Text>
      </Group>
    </footer>
  )
}
