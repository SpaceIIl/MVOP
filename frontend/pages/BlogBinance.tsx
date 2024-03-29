import Head from 'next/head'
import Image from 'next/image'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import binance from './Img/binance.png'

import {useBlogQuery} from '../src/types'

export default function main() {

  const {data, loading} = useBlogQuery({
    variables: {
      id: "clelcku4p1vg20bw1jvtfeihl"
    }
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <main className="main">
        <Navbar />
        <div className='w-[1080px] mx-auto py-24'>
            <Image className='mx-auto pb-20' src={binance} alt="" width={800} />
            <div className='w-[640px] mx-auto'>
              <div className='editor' dangerouslySetInnerHTML={{ __html: data?.blog?.blogRichText?.html ?? ""}}></div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}