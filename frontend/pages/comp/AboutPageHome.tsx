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
                        <Card title='Jak Nakoupit' content='Nakupuješ poprvé? Nevíš kde a jak? Zajímá tě cesta, která bude pro tebe ta nejideálnější? Nebo se chceš jen inspirovat jaké jsou možnosti? Tak to jsi na správném místě!' link='/howToBuy'/>
                    </div>
                    <div className='pt-16 flex justify-end'>
                        <Card title='Recenze' content='Už se vyznáš? A jen tě zajímá můj upřímný názor na produkty týkající se bitcoinu? Zde se dozvíš všechno potřebné z pohledu zkušeného uživatele.' link='/Review'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageHome