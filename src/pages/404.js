import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Rien à voir par ici</h1>
    <p>Cette page n'est pas présente sur Otium</p>
  </Layout>
)

export default NotFoundPage
