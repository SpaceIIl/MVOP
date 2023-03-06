import type { NextPage} from 'next'
import Link from 'next/link'

interface Iparagraph {
    title: string;
    content: string;
}

const ParagraphBlog = (props: Iparagraph) => {
    return (
        <div className='w-[640px] mx-auto pt-8'>
            <h3 className='pb-3 font-medium'>
                {props.title}
            </h3>
            <p className=''>
                {props.content}
            </p>
        </div>
    )
}

export default ParagraphBlog; 