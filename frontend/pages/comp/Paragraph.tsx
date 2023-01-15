import type { NextPage} from 'next'
import Link from 'next/link'

interface Iparagraph {
    title: string;
    content: string;
}

const Paragraph = (props: Iparagraph) => {
    return (
        <div className='w-[640px] mx-auto'>
            <h3 className='pb-3'>
                {props.title}
            </h3>
            <p className=''>
                {props.content}
            </p>
        </div>
    )
}

export default Paragraph; 