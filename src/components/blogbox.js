import React from 'react'
import PropTypes from 'prop-types'

function Blogbox(props) {
  return (
    <div className='blog-box'>
        <h1 className='title'>{props.name}</h1>
        <h6 className='date'>{props.date}</h6>
    </div>
  )
}

Blogbox.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string
}

export default Blogbox
