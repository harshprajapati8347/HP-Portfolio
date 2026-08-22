'use client'

import { Grid, GridItem, Stack, Box, useBreakpointValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import About from 'components/Sections/About'
import Experience from 'components/Sections/Experience'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import Blog from 'components/Sections/Blog'
import Testimonials from 'components/Sections/Testimonials'
import ScrollMore from 'components/Misc/ScrollMore'
import SkipLink from 'components/SkipLink'
import { blogPosts } from 'config/blog'

const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

const sectionBoxProps = {
  className: 'contentRow',
  paddingTop: { base: 0, lg: 20, xl: 20 },
  paddingBottom: { base: 12, lg: 10 },
  paddingX: 0,
} as const

export default function HomePage() {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })

  return (
    <>
      <SkipLink />
      <Menu />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection="row"
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          id="main-content"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '100vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box id="jobs" {...sectionBoxProps} paddingTop={{ base: 0, lg: 20, xl: 0 }}>
                <Experience />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box id="works" {...sectionBoxProps}>
                <FeaturedWorks />
              </Box>
            </FadeInLayout>
            {blogPosts.length > 0 && (
              <FadeInLayout>
                <Box id="blog" {...sectionBoxProps}>
                  <Blog />
                </Box>
              </FadeInLayout>
            )}
            <Testimonials />
            <FadeInLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingX={0}
              >
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  )
}
