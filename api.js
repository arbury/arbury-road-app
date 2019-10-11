const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const api = {}

api.fetchBaseMetadata = async () => {
  const types = await client.getEntries({
    content_type: 'baseWebsiteMetadata'
  })

  return types.items[0].fields
}

api.fetchAuthorBySlug = async({ authorSlug }) => {
  const types = await client.getEntries({
    content_type: 'person',
    'fields.slug': authorSlug
  })

  return types.items[0]
}

api.fetchPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'blogPost'
  })

  if (entries.items) {
    const items = entries.items
    return items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

api.fetchPostBySlug = async ({ slug }) => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })

  if (entries.items) {
    const items = entries.items
    return items[0]
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}

api.fetchPostsByAuthorSlug = async ({ authorSlug }) => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.author.sys.contentType.sys.id': 'person',
    'fields.author.fields.slug[all]': authorSlug
  })

  if (entries.items) {
    const items = entries.items
    return items
  }
  console.log(`Error getting Entries for ${contentType.name}.`)
}


api.client = client

export default api