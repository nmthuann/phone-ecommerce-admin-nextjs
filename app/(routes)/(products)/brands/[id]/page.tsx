import prisma from '@/lib/prisma'
import { BrandForm } from './components/brand-form'

const BrandPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  let brand
  if (id === 'new') {
    brand = null
  } else {
    brand = await prisma.brand.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BrandForm initialData={brand} />
      </div>
    </div>
  )
}

export default BrandPage
