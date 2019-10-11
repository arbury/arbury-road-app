// pages/_app.js
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{pageProps.title}</title>
          <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}