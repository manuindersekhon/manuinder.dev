import { Title } from "@mantine/core"
import { IconProps } from "@tabler/icons-react"

interface SectionTitleProps {
  title: string
  icon: React.ComponentType<IconProps>
}

export function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Title size='3rem' fw='300' lts='0.15rem'>
        {title}
      </Title>
      <Icon
        size='1.0rem'
        color='var(--mantine-color-text)'
        opacity={0.8}
        style={{ marginLeft: "0.1rem", marginTop: "0.2rem" }}
      />
    </div>
  )
}
