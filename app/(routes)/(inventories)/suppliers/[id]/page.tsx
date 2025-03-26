import { promises as fs } from 'fs'
import path from 'path'
import { SupplierForm } from './components/supplier-form'
import prisma from '@/lib/prisma'
import { City } from '@/types/location.type'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supplier',
  description: 'Supplier Managements.'
}

async function getLocation(): Promise<City[]> {
  const data = await fs.readFile(path.join(process.cwd(), 'data/VN-location-data.json'))
  const location = JSON.parse(data.toString())
  return await location
}

const SupplierPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const supplier = await prisma.supplier.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  const location = await getLocation()
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SupplierForm initialData={supplier} location={location} />
      </div>
    </div>
  )
}

export default SupplierPage
