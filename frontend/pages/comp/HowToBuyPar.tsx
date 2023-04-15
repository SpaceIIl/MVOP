import type { NextPage} from 'next'
import Paragraph from './Paragraph'
import Button from './Button'

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
        </div>
    )
}

export default HowToBuyPar