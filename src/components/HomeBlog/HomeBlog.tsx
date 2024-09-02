import { IconPencil } from "@tabler/icons-react"

import { SectionTitle } from "@src/components/SectionTitle/SectionTitle"

export function HomeBlog() {
  return (
    <>
      <section id='blog'>
        <SectionTitle title='Blog' icon={IconPencil} />
      </section>
    </>
  )
}
