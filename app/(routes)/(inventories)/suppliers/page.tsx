import prisma from '@/lib/prisma'
import { SupplierColumn } from './components/columns'
import { SupplierClient } from './components/client'

const SuppliersPage = async () => {
  const Suppliers = await prisma.supplier.findMany()

  const formattedSuppliers: SupplierColumn[] = Suppliers.map(item => ({
    id: String(item.id),
    name: item.name,
    address: item.address,
    phone: item.phone,
    email: item.email
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SupplierClient data={formattedSuppliers} />
      </div>
    </div>
  )
}

export default SuppliersPage
