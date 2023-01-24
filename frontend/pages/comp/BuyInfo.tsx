import Link from 'next/link'

interface IBuyInfo {
    content: string;
}

const BuyInfo = (props: IBuyInfo) => {
    return (
        <div className='duration-300 transition-all'>
            <p>{props.content}</p>
        </div>
    )
}

export default BuyInfo;