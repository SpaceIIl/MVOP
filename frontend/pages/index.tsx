import Head from 'next/head'
import Navbar from './comp/Navbar'
import Home from './comp/Home'
import AboutPageHome from './comp/AboutPageHome'
import ParAboutHome from './comp/ParAboutHome'
import Footer from './comp/Footer'
import {useBlogQuery} from '../src/types'

import React from 'react';

import { gql } from '../api/gql';

const Blog = gql(/* GraphQL */ `
query blog {
  blog(where: {id: "cle0gf5622jfm0cus2tp7225j"}) {
    blogDescription
    blogHeading
    blogRichText {
      text
    }
    id
  }
`);

export function BlogPage() {
  
    const {data, loading} = useBlogQuery({
      variables: {
        id: "cle0gf5622jfm0cus2tp7225j"
      }
    })
}

export default function main({}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <main className="main">
        <Navbar />
        <Home />
        <AboutPageHome />
        <ParAboutHome />
        <Footer />
      </main>
    </>
  )
}
