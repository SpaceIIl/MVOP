import type { NextPage} from 'next'
import Link from 'next/link'
import BuyInfo from './BuyInfo'
import Paragraph from './Paragraph'
import Button from './Button'
import { useState } from 'react'

const HowToBuyPar: NextPage = () => {
    return (
        <div className=''>
            <div className='py-32'>
                <Paragraph title='Jak nakoupit' content='Nakupuješ poprvé? Nevíš kde a jak? Zajímá tě cesta, která bude pro tebe ta nejideálnější? Nebo se chceš jen inspirovat jaké jsou možnosti? Tak to jsi na správném místě!' />
            </div>
            <div className='bg-black text-white py-32'>
                <div className=' w-[640px] mx-auto'>
                    <div className='pb-12'>
                        <h3 className='mb-3 !text-white'>Jak nejjednodušeji nakoupit</h3>
                        <p>Zajímá tě jen nejsnazší cesta jak nakoupit krok za krokem?</p>
                        <div className='mt-4'><Button link='/BlogBinance' /></div>
                    </div>
                    <div className='pb-12'>
                        <h3 className='mb-3 !text-white'>Koupit pro delší držení</h3>
                        <p>Chceš si nakoupit za levno a pak si to držet na své peněžence?</p>
                        <div className='mt-4'><Button link='/BlogBinance' /></div>
                    </div>
                    <div className='pb-12'>
                        <h3 className='mb-3 !text-white'>Obchodovani</h3>
                        <p>Jde ti jen o co nejnižší poplatky pro obchodování?</p>
                        <div className='mt-4'><Button link='/BlogBinance' /></div>
                    </div>
                </div>
            </div>
            {/* <div className='py-32'>
                <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
            </div> */}
        </div>
    )
}

export default HowToBuyPar