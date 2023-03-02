import type { NextPage} from 'next'
import Link from 'next/link'
import Button from './Button'
import Paragraph from './Paragraph'

const Home: NextPage = () => {
    return (
        <div className='h-[30vh] xl:h-[calc(100vh-100px)] 2xl:h-[70vh] lg:h-[65vh]'>
            <h1 className='text-center p-5 pt-28 font-medium'>Vše o bitcoinu na jednom místě</h1>
            <div className='text-center p-4 pb-40'><Button link='/' /></div>
            <Paragraph title='O webu' content='Vše co zde najdete vzniklo bez jakýchkoliv prostředků od třetích stran, to znamená, že všechen obsah na tomto webu je čistě můj upřímný názor. Čerpáno je především z mých zkušeností s danými produkty.' />
        </div>
    )
}

export default Home;