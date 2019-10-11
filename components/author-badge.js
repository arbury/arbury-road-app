import format from 'date-fns/format'
import { Link, Image, Pane, Heading, Paragraph } from 'evergreen-ui'

export default (author) => {
  return (
    <Pane marginY={24}>
      <Pane
        marginTop={16}
        display="flex"
        alignItems="center"
      >
        <Pane
          width={50}
          height={50}
          background="tint1"
          backgroundImage={`url(${author.fields.image.fields.file.url})`}
          backgroundSize="cover"
          borderRadius={25}
        />

        <Pane
          flex={1}
          marginLeft={10}
        >
          <Heading
            size={800}
            fontFamily="EB Garamond"
          >
            All essays by {author.fields.name}
          </Heading>
        </Pane>
      </Pane>

      <Pane
        marginTop={16}
      >
        <Paragraph
          fontSize={20}
          lineHeight={1.3}
          fontFamily="'Crimson Text', serif"
        >
          {author.fields.shortBio}
        </Paragraph>
      </Pane>

      <Pane
        marginTop={16}
      >
        <Link
          fontSize={20}
          lineHeight={1.3}
          fontFamily="'Crimson Text', serif"
        >
          {author.fields.email}
        </Link>

        <Link
          marginLeft={16}
          fontSize={20}
          lineHeight={1.3}
          fontFamily="'Crimson Text', serif"
          href={`https://twitter.com/@${author.fields.twitter}`}
        >
          @{author.fields.twitter}
        </Link>
      </Pane>
    </Pane>
  )
}
