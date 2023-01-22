import Link from 'next/link'

interface IButton {
    link: string;
}

const Button = (props: IButton) => {
    return (
        <button className="learn-more">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text"> <Link className='font-medium' href="{props.link}">Zjistit více</Link> </span>
        </button>
    )
}

export default Button;