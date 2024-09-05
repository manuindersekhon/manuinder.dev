import { Title } from "@mantine/core"
import { IconProps } from "@tabler/icons-react"

import styles from "./SectionTitle.module.css"

interface SectionTitleProps {
  title: string
  icon: React.ComponentType<IconProps>
}

export function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>{title}</Title>
      <Icon size='1.0rem' color='var(--mantine-color-text)' opacity={0.8} className={styles.icon} />
    </div>
  )
}
