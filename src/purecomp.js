import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
  render() {
    return (
      <>
        {this.props.count}
        </>
    )
  }
}

export default Purecomp
