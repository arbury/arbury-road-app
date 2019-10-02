import { Pane, Heading, Paragraph, Image } from 'evergreen-ui'
import formatDistance from 'date-fns/formatDistance'
import { fetchBaseMetadata } from '../api'

export default class extends React.Component {
  static async getInitialProps(ctx) {
    const { name, description } = await fetchBaseMetadata()

    return { name, description, title: name }
  }

  render() {
    const { name, description } = this.props

    return (
      <>
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
              {name}
            </Heading>
            <Heading
              // color="#"
              fontSize={28}
              fontFamily="EB Garamond"
            >
              {description}
            </Heading>
          </Pane>
        </Pane>
      </>
    )
  }
}