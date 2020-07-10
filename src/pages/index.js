import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ApollonImg from "../images/apollon.jpg"
import ColumnImg from "../images/colonne.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Art et Confort</h1>
    <img src={ApollonImg} alt="Une statue d'Apollon" />
    <h2>Le temple de l'intelligence et du bien-être</h2>
    <p>"
    Otio qui nescit uti<br/>
    plus negotii habet quam cum<br/>
    est negotium in negotio;<br/>
    nam cui quod agat institutum<br/>
    est non ullo negotio<br/>
    id agit, id studet, ibi mentem<br/>
    atque animum delectat suum:<br/>
    otioso in otio animus nescit<br/>
    quid velit<br/>
    Hoc idem est ; em neque domi<br/>
    nunc nos nec militiae sumus;<br/>
    imus huc, hinc illuc;<br/>
    cum illuc ventum est, ire illinc lubet.<br/>
    Incerte errat animus,<br/>
    praeterpropter vitam vivitur.<br/>
    "</p>
    <h2>Temple en construction</h2>
    <img src={ColumnImg} alt="Une colonne grecque" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage

