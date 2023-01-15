import type { NextPage} from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
    return (
        <div className='bg-black text-white'>
            <div className='w-[1080px] mx-auto py-32 flex justify-between'>
                <div className='block'>
                    <Link href="/"><h5 className='pb-3'>AboutBitcoin.cz</h5></Link>
                    <Link href="/"><p className='pb-1'>some link</p></Link>
                    <Link href="/"><p>some link</p></Link>
                </div>
                <div>
                    <h5 className='pb-3'>Kontakt</h5>
                    <p className=''>ssome adresa</p>
                </div>
                <div>
                    <h5 className='pb-3'>Donate</h5>
                    <p className=''>ssome adresa</p>
                </div>
            </div>
        </div>
    )
}

export default Footer