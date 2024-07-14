import React from 'react'
import { useParams } from 'react-router-dom';

function Blog() {
    const { date } = useParams();

    return (
        <div>{date}</div>
    )
}

export default Blog
