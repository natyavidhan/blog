import React from 'react'
import PropTypes from 'prop-types'

function Blog(props) {
  return (
    <div>Blog</div>
  )
}

Blog.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    markdown: PropTypes.string
}

export default Blog
