import { Link, Pane, Heading, Paragraph, Image } from 'evergreen-ui'
import api from '../api'
import PageStructure from '../components/page-structure'
import PageHeader from '../components/page-header'
import PostList from '../components/post-list'

export default class extends React.Component {
  static async getInitialProps(ctx) {
    const { name, description } = await api.fetchBaseMetadata()
    const posts = await api.fetchPosts()
    return { name, description, title: name, posts }
  }

  render() {
    const { name, description, posts } = this.props

    return (
      <PageStructure>
        <PageHeader name={name} description={description} />

        <PostList posts={posts} />
      </PageStructure>
    )
  }
}