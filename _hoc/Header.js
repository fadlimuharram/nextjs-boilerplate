import React from 'react'
import Head from 'next/head'

const Header = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="Description"
      content="an example of NextJS app with 100% accessible lighthouse score"
    />
    <link rel="manifest" href="static/manifest.json" />
    <link rel="icon" href="static/img/favicon.ico" />
    {props.children}
  </Head>
)

export default Header;