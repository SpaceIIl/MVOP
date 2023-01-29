import type { NextPage} from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
    return (
        <div className='bg-black text-white'>
            <div className='w-[1080px] mx-auto py-20 flex justify-between'>
                <div className='w-52'>
                    <Link className='bg-black' href="/"><h5 className='NavButton !text-white w-min mb-2'>AboutBitcoin.cz</h5></Link>
                    <Link className='bg-black' href="/howToBuy"><p className='NavButton w-min mb-1'>Jak&nbsp;Nakoupit</p></Link>
                    <Link className='bg-black' href="/Review"><p className='NavButton w-min mb-1'>Recenze</p></Link>
                </div>
                <div className='w-52'>
                    <h5 className='pb-3'>Kontakt</h5>
                    <p className=''>ssome adresa</p>
                </div>
                <div className='w-52'>
                    <h5 className='pb-3'>Donate</h5>
                    <p className=''>ssome adresa jh gsdjhgsjh gjhsg jsj gsjhg j gjh</p>
                </div>
            </div>
        </div>
    )
}

export default Footer