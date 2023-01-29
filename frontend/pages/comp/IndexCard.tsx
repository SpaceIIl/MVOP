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
        <div className='w-[380px] bg-darkGrey p-8 BoxShadow'>
            <h3 className='pb-4 font-bold'>
                {props.title}
            </h3>
            <p className='pb-8'>
                {props.content}
            </p>
            <Button link={props.link}/>
        </div>
    )
}

export default Card; 