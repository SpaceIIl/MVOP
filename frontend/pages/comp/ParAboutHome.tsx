import type { NextPage} from 'next'
import Link from 'next/link'
import Paragraph from './Paragraph'

const ParAboutHome: NextPage = () => {
    return (
        <div className='py-32'>
            <Paragraph title='O mně' content='Web vznikl, jako maturitní projekt. První zárodek se mi prohnal hlavou, když jsem si uvědomil, že neznám žádný pořádně udělaný web bez nějakého sponzora, který by byl u recenzí apod. upřednostňován. Kupříkladu na platformě Youtube je dostatek nestranného kvalitního obsahu, ale ve formě webu tomu tak není. Troufám si tedy říct, že bitcoinu dostatečně rozumím, abych byl schopen předat znalosti dál. Už tak jsem pár lidem pomohl nakoupit a porozumět této problematice.' />
        </div>
    )
}

export default ParAboutHome