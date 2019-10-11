import { Pane } from 'evergreen-ui'

export default ({ children }) => (
  <Pane
    padding={40}
    marginX="auto"
    maxWidth={800}
  >
    {children}
  </Pane>
)