import { Box, Center, Container } from "@mantine/core"

import { About } from "@src/components/HomeAbout/HomeAbout"
import { HomeBlog } from "@src/components/HomeBlog/HomeBlog"
import { HomeContact } from "@src/components/HomeContact/HomeContact"
import { HomeFooter } from "@src/components/HomeFooter/HomeFooter"
import { HomeWork } from "@src/components/HomeWork/HomeWork"
import { Name } from "@src/components/Name/Name"
import { TopBar } from "@src/components/Topbar/Topbar"

export default function HomePage() {
  return (
    <Container pt='lg'>
      <TopBar />
      <Center mt='15rem'>
        <Name />
      </Center>
      <Box mt='15rem'>
        <About />
      </Box>
      <Box mt='15rem'>
        <HomeWork />
      </Box>
      <Box mt='15rem'>
        <HomeBlog />
      </Box>
      <Box mt='15rem'>
        <HomeContact />
      </Box>
      <Box mt='15rem' mb='2rem'>
        <HomeFooter />
      </Box>
    </Container>
  )
}
