import React from 'react'
import { Link } from 'react-router-dom'

function head() {
  return (    <div className="header text-center">
    <h1>Natya's Blog</h1>
    <h5>Stuff that fascinates me</h5>
    <div className="buttons mt-3">
        <Link to={"/"}><button className="header-button">Home</button></Link>
        <button className="header-button" onClick={()=>{window.open('https://natya.is-a.dev')}}>Resume</button>
        <button className="header-button" onClick={()=>{window.open('https://www.linkedin.com/in/natyavidhan')}}>LinkedIn</button>
        <button className="header-button" onClick={()=>{window.open('https://github.com/natyavidhan')}}>Github</button>
    </div>
</div>
  )
}

export default head