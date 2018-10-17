import React from 'react'
import { findDOMNode } from 'react-dom'
import cx from 'classnames'

interface ButtonProps {

}

class Button extends React.Component<ButtonProps, any> {

  render() {
    return (
      <button>
        {this.props.children}
      </button>
    )
  }

}

export default Button
