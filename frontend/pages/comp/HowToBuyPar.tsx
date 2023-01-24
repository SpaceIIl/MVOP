import type { NextPage} from 'next'
import Link from 'next/link'
import BuyInfo from './BuyInfo'
import Paragraph from './Paragraph'
import { useState } from 'react'

const HowToBuyPar: NextPage = () => {
    const [showTextBuy, setShowTextBuy] = useState(false);
    const [showTextBuy2, setShowTextBuy2] = useState(false);
    const [showTextBuy3, setShowTextBuy3] = useState(false);
    const [showTextBuy4, setShowTextBuy4] = useState(false);

    return (
        <div className=''>
            <div className='py-32'>
                <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
            </div>
            <div className='bg-black text-white py-32'>
                <div className=' w-[640px] mx-auto'>
                    <div className='pb-12'>
                        <button className='mb-3 NavButton' onClick={()=> setShowTextBuy(!showTextBuy)}><h3>Nejjednodušší cesta, jak nakoupit</h3></button>
                        {showTextBuy ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div className='pb-12'>
                        <button className='mb-3 NavButton' onClick={()=> setShowTextBuy2(!showTextBuy2)}><h3>Koupit pro delší držení</h3></button>
                        {showTextBuy2 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div className='pb-12'>
                        <button className='mb-3 NavButton' onClick={()=> setShowTextBuy3(!showTextBuy3)}><h3>Obchodovani</h3></button>
                        {showTextBuy3 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div>
                        <button className='mb-3 NavButton' onClick={()=> setShowTextBuy4(!showTextBuy4)}><h3>Lmao neco proste</h3></button>
                        {showTextBuy4 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                </div>
            </div>
            <div className='py-32'>
                <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
            </div>
        </div>
    )
}

export default HowToBuyPar