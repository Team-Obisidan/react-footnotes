import * as React from 'react'
import Tooltip from 'rc-tooltip'

class Footnote extends React.Component {
  render () {
    const { i, desc, children } = this.props
    let text = <span><sup>{i}</sup>&nbsp;{desc}</span>
    return (
      <React.Fragment>
        {children}<Tooltip placement='bottomLeft' overlay={text}><a href={`#footnote-${i}`}><sup>{i}</sup></a></Tooltip>
      </React.Fragment>

    )
  }
}

export default Footnote
