import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
      <div>
        <nav className='bg-black h-[100px] text-white'>
          <div className='xl:w-[1000px] mx-auto pt-[38px] flex justify-between lg:w-[700px]'>
            <div className='flex my-auto'>
              <Link className='bg-black' href="/"><h5 className='NavButton !text-white'>AboutBitcoin.cz</h5></Link>
            </div>
            <div className="my-auto flex">
              <div className='bg-black mr-10'>
                <Link className='bg-black' href="/howToBuy"><p className='NavButton'>Jak Nakoupit</p></Link> 
              </div>
              <div className='bg-black'>
                <Link className='bg-black' href="/Review"><p className='NavButton'>Recenze</p></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar