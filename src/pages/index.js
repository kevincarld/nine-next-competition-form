
// chakra
import { Box } from "@chakra-ui/react"
//
import Layout from "components/util/Layout"
import Hero from "components/Hero"
import Form from "components/Form/Form"

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Box id='intro' minH={'100vh'}>
        <Form />
      </Box>
    </Layout>
  )
}
