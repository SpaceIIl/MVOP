//not using

import type { NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'


interface IBlog {
    h1: string;
    img: string;
    content: string;
}

const BlogText = (props: IBlog) => {
    return (
        <div className=''>
            <Image
            src={"/kraken.png"}
            alt=""
            width={500}
            />
        </div>
    )
}

export default BlogText;