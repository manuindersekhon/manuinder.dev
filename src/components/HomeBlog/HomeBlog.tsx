import { SimpleGrid } from "@mantine/core"
import { IconPencil } from "@tabler/icons-react"

import { BlogCard } from "@src/components/BlogCard/BlogCard"
import { SectionTitle } from "@src/components/SectionTitle/SectionTitle"
import { blogPosts } from "@src/lib/constants"

export function HomeBlog() {
  return (
    <section id='blog'>
      <SectionTitle title='Blog' icon={IconPencil} />
      <SimpleGrid cols={{ base: 1 }} spacing={{ base: "md", sm: "lg" }} verticalSpacing={{ base: "md", sm: "lg" }}>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </SimpleGrid>
    </section>
  )
}
