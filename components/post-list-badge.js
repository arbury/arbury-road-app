import format from 'date-fns/format'
import { Link, Image, Pane, Heading, Paragraph } from 'evergreen-ui'

export default (post) => {
  return (
    <Pane
      paddingY={24}
    >
      <Link
        href={`/${format(new Date(post.fields.publishDate), 'yyyy/MM')}/${post.fields.slug}`}
      >
      <Pane
        width="100%"
        height={300}
        background="tint1"
        backgroundImage={`url(${post.fields.heroImage.fields.file.url})`}
        backgroundSize="cover"
        />
      </Link>

      <Pane marginTop={16}>
        <Heading
          is="a"
          href={`/${format(new Date(post.fields.publishDate), 'yyyy/MM')}/${post.fields.slug}`}
          size={800}
          fontFamily="EB Garamond"
        >
          {post.fields.title}
        </Heading>

        <Paragraph
          marginTop={8}
          fontSize={20}
          lineHeight={1.3}
          fontFamily="'Crimson Text', serif"
        >
          {post.fields.description}
        </Paragraph>
      </Pane>

      <Pane
        marginTop={16}
        display="flex"
        alignItems="center"
      >
        <Pane
          width={50}
          height={50}
          background="tint1"
          backgroundImage={`url(${post.fields.author.fields.image.fields.file.url})`}
          backgroundSize="cover"
          borderRadius={25}
        />

        <Pane
          flex={1}
          marginLeft={10}
        >
          <Heading
            is="a"
            href={`/${post.fields.author.fields.slug}`}

            size={600}
            fontFamily="EB Garamond"
          >
            by {post.fields.author.fields.name}
          </Heading>
        </Pane>

      </Pane>


    </Pane>
  )
}
