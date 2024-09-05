import Link from "next/link"
import { Button, Card, Group, Stack, Text } from "@mantine/core"

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
    <Link href={courseLink} passHref legacyBehavior>
      <Card className={`${styles.card} ${styles.certificateCard}`} shadow='sm' padding='lg' radius='md' component='a'>
        <Stack justify='space-between' style={{ height: "100%" }}>
          <div>
            <Text fw={600} size='lg' mb='md'>
              {title}
            </Text>
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
    </Link>
  )
}
