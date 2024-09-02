import { IconUser } from "@tabler/icons-react"

import { SectionTitle } from "../SectionTitle/SectionTitle"

export function About() {
  return (
    <section id='about'>
      <SectionTitle title='About' icon={IconUser} />
      {/* Add your about content here */}
    </section>
  )
}
