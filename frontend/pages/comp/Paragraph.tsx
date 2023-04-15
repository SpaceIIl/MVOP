interface Iparagraph {
    title: string;
    content: string;
}

const Paragraph = (props: Iparagraph) => {
    return (
        <div className='w-[640px] mx-auto'>
            <h3 className='pb-3 font-medium'>
                {props.title}
            </h3>
            <p className=''>
                {props.content}
            </p>
        </div>
    )
}

export default Paragraph; 