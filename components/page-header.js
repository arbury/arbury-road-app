import { Pane, Heading, Link } from 'evergreen-ui'

export default ({ name, description }) => (
  <Pane
    marginBottom={30}
    borderBottom
  >
    <Heading
      is="a"
      href="/"
      textDecoration="none"
      color="black"
      fontSize={45}
      fontFamily="EB Garamond"
    >
      {name}
    </Heading>
    <Heading
      fontSize={28}
      marginTop={16}
      fontFamily="EB Garamond"
    >
      {description}
    </Heading>

    <Pane marginY={16}>
      <Link
        fontSize={20}
        fontFamily="EB Garamond"
        href="/"
      >
        Essays
      </Link>

      <Link
        marginLeft={16}
        fontSize={20}
        fontFamily="EB Garamond"
        href="/podcasts"
      >
        Podcasts
      </Link>
    </Pane>


  </Pane>
)