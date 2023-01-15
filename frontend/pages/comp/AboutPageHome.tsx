import type { NextPage} from 'next'
import Link from 'next/link'
import Button from './Button'
import Paragraph from './Paragraph'

const AboutPageHome: NextPage = () => {
    return (
        <div className='text-white bg-black'>
            <div className='w-[640px] mx-auto'>
                <div className='py-10 pt-32'>
                    <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, hdgfhg pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
                    <div className='py-6'>
                        <Button />
                    </div>
                </div>
                <div className='py-10'>
                    <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
                    <div className='py-6'>
                        <Button />
                    </div>
                </div>
                <div className='py-10 pb-32'>
                    <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
                    <div className='py-6'>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageHome