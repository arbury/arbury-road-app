import PostListBadge from './post-list-badge'

export default ({ posts }) => {
  return posts.map(post =>
    (
      <PostListBadge
        key={post.fields.slug}
        {...post}
      />
    ))
}
