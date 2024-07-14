import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Blogbox(props) {
  return (
    <Link to={`/${[props.date]}`}>
        <div className='blog-box'>
            <h1 className='title'>{props.name}</h1>
            <h6 className='date'>{props.date}</h6>
        </div>
    </Link>
  )
}

Blogbox.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string
}

export default Blogbox
