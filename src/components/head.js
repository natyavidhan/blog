import React from 'react'

function head() {
  return (    <div className="header text-center">
    <h1>Natya's Blog</h1>
    <h5>Stuff that fascinates me</h5>
    <div className="buttons mt-3">
        <button className="header-button">Home</button>
        <button className="header-button">Resume</button>
        <button className="header-button">LinkedIn</button>
        <button className="header-button">Github</button>
    </div>
</div>
  )
}

export default head