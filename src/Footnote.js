import * as React from 'react'

class Footnote extends React.Component {
  render () {
    const { i, children } = this.props
    return (
      <React.Fragment>
        {children}<a href={`#footnote-${i}`}><sup>{i}</sup></a>
      </React.Fragment>

    )
  }
}

export default Footnote
