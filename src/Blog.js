import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
import Head from './components/head';

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

        </div>
    )
}

export default Blog
