import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
import Head from './components/head';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'

function Blog() {
    const { date } = useParams();

    const [md, setmd] = useState(0)

    $.ajax({
        type: 'GET',
        url: `blogs/${date}.md`,
        success: (msg) => {
            setmd(msg)
        }
    })

    return (
        <div className="container mt-5">
            <Head/>
            <Markdown className='mt-5' remarkPlugins={[remarkGfm, remarkImages]}>{md}</Markdown>
        </div>
    )
}

export default Blog
