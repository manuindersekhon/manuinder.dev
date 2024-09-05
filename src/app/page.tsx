import { Box, Container } from "@mantine/core"

import { About } from "@src/components/HomeAbout/HomeAbout"
import { HomeBlog } from "@src/components/HomeBlog/HomeBlog"
import { HomeContact } from "@src/components/HomeContact/HomeContact"
import { HomeFooter } from "@src/components/HomeFooter/HomeFooter"
import { HomeWork } from "@src/components/HomeWork/HomeWork"
import { Name } from "@src/components/Name/Name"
import { TopBar } from "@src/components/Topbar/Topbar"
import classes from "@src/styles/Page.module.css"

export default function HomePage() {
  return (
    <>
      <Box>
        <Container pt='lg'>
          <TopBar />
        </Container>
      </Box>
      <Box className={classes.gradientBackgroundTop}>
        <Container className={classes.topSection}>
          <Name />
        </Container>
      </Box>
      <Box className={classes.staticBackground}>
        <Container>
          <About />
        </Container>
      </Box>
      <Box className={classes.staticBackground}>
        <Container className={classes.midSection}>
          <HomeWork />
        </Container>
      </Box>
      <Box className={classes.staticBackground}>
        <Container className={classes.midSection}>
          <HomeBlog />
        </Container>
      </Box>
      <Box className={classes.gradientBackgroundBottom}>
        <Container className={classes.contactSection}>
          <HomeContact />
        </Container>
      </Box>
      <Box>
        <Container pb='2rem'>
          <HomeFooter />
        </Container>
      </Box>
    </>
  )
}
