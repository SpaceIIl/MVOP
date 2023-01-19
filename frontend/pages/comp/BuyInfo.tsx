import Link from 'next/link'

interface IBuyInfo {
    content: string;
}

const BuyInfo = (props: IBuyInfo) => {
    return (
        <div className=''>
            <p>{props.content}</p>
        </div>
    )
}

export default BuyInfo;