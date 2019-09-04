import { Pane, Heading, Paragraph, Image } from 'evergreen-ui'
import formatDistance from 'date-fns/formatDistance'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes()
    if (types.items) return types.items
    console.log('Error getting Content Types.')
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes()
      const allPosts = await fetchEntriesForContentType(contentTypes[0])
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  if (posts.length > 0) console.log(posts[0].fields)

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet" />

      </Head>

      <Pane
        padding={40}
        marginX="auto"
        maxWidth={600}
      >

        <Pane
          paddingBottom={30}
          marginBottom={30}
          borderBottom
          width={600}
        >
        <Heading
          marginBottom={24}
          color="black"
          fontSize={45}
          fontFamily="EB Garamond"
        >
          The Arburian
        </Heading>
        <Heading
          // color="#"
          fontSize={28}
          fontFamily="EB Garamond"
        >
          A magazine of wealth and taste.
        </Heading>
        </Pane>

      {posts.length > 0
          ? posts.map(p => (
            <Pane
              marginBottom={40}
            >
              <Pane
                width={600}
                height={200}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="50% 50%;"
                backgroundImage={`url(${p.fields.heroImage.fields.file.url})`}
              />
              <Heading
                marginTop={16}
                color="black"
                size={800}
                fontFamily="EB Garamond"
                fontWeight={600}
              >
                {p.fields.title}
              </Heading>
              <Paragraph
                marginY={16}
                fontFamily="EB Garamond"
                fontSize={20}
              >
                {p.fields.description}
              </Paragraph>
              <Pane>
                <Paragraph
                  fontFamily="EB Garamond"
                  fontSize={16}
                >
                  by {p.fields.author.fields.name} {formatDistance(new Date(p.fields.publishDate), new Date(), { addSuffix: true })}
                </Paragraph>

              </Pane>
          </Pane>
        ))
        : null}
      </Pane>
    </>
  )

}

export default HomePage