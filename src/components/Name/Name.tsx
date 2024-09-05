import { Title } from "@mantine/core"

import styles from "./Name.module.css"

export function Name() {
  return (
    <div className={styles.container}>
      <Title className={styles.greeting}>Hi, I&apos;m</Title>
      <Title className={styles.name}>Manuinder Sekhon</Title>
      <Title className={styles.role}>SOFTWARE ENGINEER</Title>
    </div>
  )
}
