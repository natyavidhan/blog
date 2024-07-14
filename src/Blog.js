import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
import {Helmet} from "react-helmet";

import Head from './components/head';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'

function Blog() {
    const { date } = useParams();

    const [md, setmd] = useState(0)
    const [title, settitle] = useState("")

    $.ajax({
        type: 'GET',
        url: `blogs/${date}.md`,
        success: (msg) => {
            setmd(msg)
            settitle(msg.split("\n")[0].replace("#", "") + " | ")
        }
    })

    return (
        <>
        <Helmet>
            <title>{`${title}${date}`}</title>
            <meta name="description" content="open the blog to see content" />
        </Helmet>
        <div className="container mt-5">
            <Head/>
            <Markdown className='mt-5' remarkPlugins={[remarkGfm, remarkImages]}>{md}</Markdown>
        </div>
        </>
    )
}

export default Blog
