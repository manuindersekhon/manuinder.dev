import Link from "next/link"
import { Box, Card, Group, Text } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

import styles from "./BlogCard.module.css"

interface BlogCardProps {
  title: string
  subtitle: string
  date: string
  readTime: string
  url: string
}

export function BlogCard({ title, subtitle, date, readTime, url }: BlogCardProps) {
  return (
    <Link href={url} target='_blank' className={styles.cardLink}>
      <Card className={styles.card} padding='md' radius='md' withBorder>
        <Box className={styles.iconWrapper}>
          <IconExternalLink size={16} className={styles.externalIcon} />
        </Box>
        <Text fw={600} size='md' mb='xs' lineClamp={2} className={styles.title}>
          {title}
        </Text>
        <Text size='sm' mb='xs' lineClamp={2} className={styles.subtitle}>
          {subtitle}
        </Text>
        <Group mt='xs' justify='space-between'>
          <Text size='xs' className={styles.metaText}>
            {date}
          </Text>
          <Text size='xs' className={styles.metaText}>
            {readTime}
          </Text>
        </Group>
      </Card>
    </Link>
  )
}
