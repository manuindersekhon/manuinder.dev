import { Text, Title } from "@mantine/core"

export function Name() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Text size='2rem' fw='400' lts='0.2rem' style={{ color: "var(--mantine-color-text)", opacity: 0.6 }}>
          Hi, I&apos;m
        </Text>
        <Title size='4rem' fw='400' ta='center' lts='0.15rem'>
          Manuinder Sekhon
        </Title>
      </div>
    </>
  )
}
