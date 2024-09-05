import { Box, Center, Text } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone, IconProps } from "@tabler/icons-react"

import { SectionTitle } from "@src/components/SectionTitle/SectionTitle"

import styles from "./HomeContact.module.css"

export function HomeContact() {
  return (
    <section id='contact'>
      <SectionTitle title='Contact' icon={IconPhone} />
      <Text size='xl' style={{ textAlign: "center" }} mb='xl'>
        You can contact me at
      </Text>
      <Center>
        <Box>
          <ContactItem
            icon={IconMail}
            href='mailto:sekhon.manuinder@gmail.com'
            value={
              <Text size='xl'>
                <strong className={styles.boldText}>sekhon.manuinder</strong>
                <span className={styles.regularText}>@</span>
                <strong className={styles.boldText}>gmail</strong>
                <span className={styles.regularText}>.com</span>
              </Text>
            }
          />
          <ContactItem
            icon={IconBrandGithub}
            href='https://github.com/manuindersekhon'
            value={
              <Text size='xl'>
                <strong className={styles.boldText}>github</strong>
                <span className={styles.regularText}>.com/</span>
                <strong className={styles.boldText}>manuindersekhon</strong>
              </Text>
            }
          />
          <ContactItem
            icon={IconBrandLinkedin}
            href='https://www.linkedin.com/in/manuindersekhon/'
            value={
              <Text size='xl'>
                <strong className={styles.boldText}>linkedin</strong>
                <span className={styles.regularText}>.com/in/</span>
                <strong className={styles.boldText}>manuindersekhon</strong>
              </Text>
            }
          />
        </Box>
      </Center>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ComponentType<IconProps>
  value: React.ReactNode
  href: string
}

function ContactItem({ icon: Icon, value, href }: ContactItemProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        alignItems: "center",
        gap: "1.3rem",
        textDecoration: "none",
        color: "inherit",
        marginBottom: "1.3rem",
      }}
    >
      <Icon size={35} />
      {value}
    </a>
  )
}
