import type { NextPage} from 'next'
import Link from 'next/link'
import Button from './Button'

interface ICard {
    title: string;
    content: string;
    link: string;
}

const Card = (props: ICard) => {
    return (
        <div className='w-[380px] bg-opacity-10 bg-white p-8'>
            <h3 className='pb-3'>
                {props.title}
            </h3>
            <p className=''>
                {props.content}
            </p>
            <Button link={props.link}/>
        </div>
    )
}

export default Card; 