
// chakra
import { Box } from "@chakra-ui/react"
//
import Hero from "components/Hero"
import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Box id='intro' minH={'100vh'}>

      </Box>
    </Layout>
  )
}
