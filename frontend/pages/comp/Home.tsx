import type { NextPage} from 'next'
import Link from 'next/link'
import Button from './Button'
import Paragraph from './Paragraph'

const Home: NextPage = () => {
    return (
        <div className='h-[calc(100vh-100px)]'>
            <h1 className='text-center p-5 pt-28'>Vše o bitcoinu na jedom místě</h1>
            <div className='text-center p-4 pb-40'><Button/></div>
            <Paragraph title='O webu' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor.' />
        </div>
    )
}

export default Home;