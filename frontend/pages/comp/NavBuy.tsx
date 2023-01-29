import type { NextPage} from 'next'
import Link from 'next/link'

const NavBuy: NextPage = () => {
    return (
      <div className=' text-white'>
        <ul className='fixed bg-black'>
            <li><Link className='bg-black' href="/howToBuy"><p className='my-3 mx-6'>Jak Nakoupit</p></Link></li><br />
            <li><Link className='bg-black' href="/howToBuy"><p className='my-3 mx-6'>Jak Nakoupit</p></Link></li><br />
            <li><Link className='bg-black' href="/howToBuy"><p className='my-3 mx-6'>Jak Nakoupit</p></Link></li><br />
        </ul>
      </div>
    )
}

export default NavBuy