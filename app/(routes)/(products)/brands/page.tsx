import prisma from '@/lib/prisma'
import { BrandColumn } from './components/columns'
import { BrandClient } from './components/client'

const BrandsPage = async () => {
  const brands = await prisma.brand.findMany({})

  const formattedbrands: BrandColumn[] = brands.map(item => ({
    id: String(item.id),
    brandName: item.brandName,
    description: item.description,
    brandAbbreviation: item.brandAbbreviation,
    brandUrl: item.brandUrl
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BrandClient brands={formattedbrands} />
      </div>
    </div>
  )
}

export default BrandsPage
