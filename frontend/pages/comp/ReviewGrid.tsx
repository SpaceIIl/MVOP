import type { NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface IGrid {
    img: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
}

const ReviewGrid = (props: IGrid) => {
    return (
        <div className='grid grid-cols-6 gap-6 border-solid border-black border-b h-20'>
            <div className='my-auto'>
                <Image src={props.img} alt="" height={90} width={90} className='inline-block'/>
            </div>
            <div className='my-auto text-xl'>{props.c2}</div>
            <div className='my-auto text-xl'>{props.c3}</div>
            <div className='my-auto text-xl'>{props.c4}</div>
            <div className='my-auto text-xl'>{props.c5}</div>
            <div className='my-auto text-xl'>{props.c6}</div>
        </div>
    )
}

export default ReviewGrid;