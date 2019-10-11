import { Link, Pane, Heading, Paragraph, Image } from 'evergreen-ui'
import api from '../api'
import PageStructure from '../components/page-structure'
import PageHeader from '../components/page-header'
import PostList from '../components/post-list'
import AuthorBadge from '../components/author-badge'

export default class extends React.Component {
  static async getInitialProps(ctx) {
    const { name, description } = await api.fetchBaseMetadata()

    const { year } = ctx.query
    // author is actually year, but we are overloading next.js
    // dynamic routing
    const authorSlug = year

    const posts = await api.fetchPostsByAuthorSlug({ authorSlug })
    const author = await api.fetchAuthorBySlug({ authorSlug })

    return { name, description, title: name, posts, author }
  }

  render() {
    const { name, description, posts, author } = this.props

    return (
      <PageStructure>
        <PageHeader name={name} description={description} />

        <Pane
          marginTop={16}
        >
          <Paragraph
            fontSize={20}
            lineHeight={1.3}
            fontFamily="'Crimson Text', serif"
          >
            Postcasts coming soon...
          </Paragraph>
        </Pane>

      </PageStructure>
    )
  }
}