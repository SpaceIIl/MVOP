import Link from 'next/link'

interface IButton {
    link: string;
}

const Button = (props: IButton) => {
    return (
        <button className="learn-more">
            <Link className='font-medium' href={props.link}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text"> Zjistit více</span>
            </Link>
        </button>
    )
}

export default Button;