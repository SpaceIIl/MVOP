import type { NextPage} from 'next'
import Link from 'next/link'
import Button from './Button'
import Paragraph from './Paragraph'
import Card from './IndexCard'

const AboutPageHome: NextPage = () => {
    return (
        <div className='text-white bg-black'>
            <div className='w-[640px] mx-auto'>
                <div className='pb-16'>
                    <div className='pt-16 flex justify-start'>
                        <Card title='Jak Nakoupit' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque.  Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, Nullam sit amet nisl lobortis, hdgfhg pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor jakoby jono poggers' link='/'/>
                    </div>
                    <div className='pt-16 flex justify-end'>
                        <Card title='Recenze' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque.  Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, Nullam sit amet nisl lobortis, hdgfhg pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' link='/'/>
                    </div>
                    <div className='pt-16 flex justify-start'>
                        <Card title='Jak Nakoupit' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque.  Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, Nullam sit amet nisl lobortis, hdgfhg pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor jakoby jono poggers' link='/'/>
                    </div>
                    <div className='pt-16 flex justify-end'>
                        <Card title='Recenze' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque.  Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, Nullam sit amet nisl lobortis, hdgfhg pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' link='/'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageHome