import { Pane, Heading, Paragraph, Image } from 'evergreen-ui'
import { useRouter } from 'next/router'

import api from '../../../api'
import PageStructure from '../../../components/page-structure'
import PageHeader from '../../../components/page-header'
import PostListBadge from '../../../components/post-list-badge'
import PostBody from '../../../components/post-body'

export default class extends React.Component {
  static async getInitialProps(ctx) {
    const { name, description } = await api.fetchBaseMetadata()

    const { slug } = ctx.query
    const post = await api.fetchPostBySlug({ slug })

    return { name, description, title: name, post }
  }

  render() {
    const { name, description, post } = this.props

    return (
      <PageStructure>
        <PageHeader name={name} description={description} />

        <PostListBadge
          {...post}
        />

        <PostBody
          {...post}
        />

      </PageStructure>
    )
  }
}