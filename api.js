const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export const fetchBaseMetadata = async () => {
  const types = await client.getEntries({
    content_type: 'baseWebsiteMetadata'
  })

  return types.items[0].fields
}

// async function fetchEntriesForContentType(contentType) {
//   const entries = await client.getEntries({
//     content_type: contentType.sys.id
//   })

//   if (entries.items) return entries.items
//   console.log(`Error getting Entries for ${contentType.name}.`)
// }