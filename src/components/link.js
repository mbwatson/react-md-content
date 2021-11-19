import { PropTypes } from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'

export const Link = ({ to, children, ...props }) => {
  const nonInternalUrlPattern = new RegExp(/^https?:\/\/|^mailto:/)
  const match = nonInternalUrlPattern.exec(to)
  
  if (match) {
    return <a href={ to } target="blank" rel="noopener noreferrer" { ...props }>{ children }</a>
  }
  
  return (
    <ReactLink to={ to } { ...props }>{ children }</ReactLink>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
