import type { NextPage} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import kraken from '../ImgGrid/kraken.png'

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
        <div className='grid grid-cols-6 gap-6 border-solid border-black border-b'>
            <div className='mx-auto my-auto'><Image src={props.img} alt="" width={100} height={100}/></div>
            <div className='my-auto'>{props.c2}</div>
            <div className='my-auto'>{props.c3}</div>
            <div className='my-auto'>{props.c4}</div>
            <div className='my-auto'>{props.c5}</div>
            <div className='my-auto'>{props.c6}</div>
        </div>
    )
}

export default ReviewGrid;