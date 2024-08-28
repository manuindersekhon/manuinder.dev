import Image from "next/image"
import Link from "next/link"
import { Button, Container, Group, Title } from "@mantine/core"

export default function NotFound() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Title mb='xl' ta='center' fw={900} ff='var(--mantine-font-family)'>
        Looks like you&apos;re lost
      </Title>
      <Image
        mt='xl'
        src='/cat-not-found.png'
        alt='404 not found'
        width={300}
        height={300}
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Group mt='xl' justify='center'>
        <Button component={Link} href='/' size='md' variant='outline' color='var(--mantine-color-text)'>
          HOME
        </Button>
      </Group>
    </Container>
  )
}
