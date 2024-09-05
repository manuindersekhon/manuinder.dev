import { Text } from "@mantine/core"
import { IconUser } from "@tabler/icons-react"

import { SectionTitle } from "../SectionTitle/SectionTitle"
import styles from "./HomeAbout.module.css"

export function About() {
  return (
    <section id='about'>
      <SectionTitle title='About' icon={IconUser} />
      <Text className={styles.aboutText}>
        Welcome to my portfolio! I&apos;m a software engineer skilled in building mobile and full-stack applications.
        Here, you&apos;ll find a selection of my work, blogs, talks, and certifications that reflect my journey and
        expertise.
      </Text>
      <Text className={styles.locationText}>
        Working at{" "}
        <a href='https://geekyants.com/' target='_blank' rel='noopener noreferrer' className={styles.link}>
          GeekyAnts
        </a>
        . Based in India.
      </Text>
    </section>
  )
}
