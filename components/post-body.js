import { Component } from 'react'
import format from 'date-fns/format'
import { Link, Image, Pane, Heading, Paragraph } from 'evergreen-ui'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown'

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

const Bold = ({ children }) => <p className="bold">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Paragraph
        fontSize={20}
        lineHeight={1.3}
        fontFamily="'Crimson Text', serif"
      >
        {children}
      </Paragraph>
    ),

    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={16}
        size={800}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={16}
        size={700}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={12}
        size={600}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={10}
        size={500}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={8}
        size={400}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),

    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading
        fontWeight={600}
        marginY={8}
        size={300}
        fontFamily="EB Garamond"
      >
        {children}
      </Heading>
    ),
  },


  renderText: text => text.replace('!', '?'),
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { richText: null }
  }

  async componentDidMount() {
    const { fields } = this.props

    const richText = await richTextFromMarkdown(fields.body)
    this.setState({ richText })
  }

  render() {
    const { richText } = this.state
    return (
      <Pane
        paddingY={8}
      >
        {richText && documentToReactComponents(richText, options)}
      </Pane>
    )
  }
}
