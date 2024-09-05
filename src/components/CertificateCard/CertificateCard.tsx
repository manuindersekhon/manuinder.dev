import Link from "next/link"
import { Button, Card, Group, Stack, Text } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

import styles from "./CertificateCard.module.css"

interface CertificateCardProps {
  title: string
  description: string
  courseLink: string
  certificateLink: string
  githubLink?: string
}

export function CertificateCard({ title, description, courseLink, certificateLink, githubLink }: CertificateCardProps) {
  return (
    <Card className={`${styles.card} ${styles.certificateCard}`} shadow='sm' padding='lg' radius='md'>
      <Stack justify='space-between' style={{ height: "100%" }}>
        <div>
          <Group align='center' justify='space-between' mb='md'>
            <Text fw={600} size='lg'>
              {title}
            </Text>
            <Link href={courseLink} target='_blank' rel='noopener noreferrer'>
              <IconExternalLink size='1rem' color='white' style={{ opacity: 0.7 }} />
            </Link>
          </Group>
          <Text size='sm' mb='md' style={{ opacity: 0.9 }}>
            {description}
          </Text>
        </div>
        <Group mt='auto' grow>
          <Button
            component='a'
            href={certificateLink}
            target='_blank'
            variant='outline'
            color='gray'
            className={styles.button}
          >
            Certificate
          </Button>
          {githubLink && (
            <Button
              component='a'
              href={githubLink}
              target='_blank'
              variant='outline'
              color='gray'
              className={styles.button}
            >
              GitHub
            </Button>
          )}
        </Group>
      </Stack>
    </Card>
  )
}
