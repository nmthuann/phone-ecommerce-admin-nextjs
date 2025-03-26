// import { OrderBy } from '@/constants/order-by.enum'
import prisma from '@/lib/prisma'
// import { PurchaseOrderResponse } from '@/types/inventories.type'
// import { Page } from '@/types/responses/page.type'
import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server' //NextResponse

export async function GET(req: NextRequest, res: NextApiResponse) {
  // const searchParams = req.nextUrl.searchParams
  // const page = searchParams.get('page') ?? '1'
  // const size = searchParams.get('size') ?? '10'

  // const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/purchaseOrders?page=${page}&take=${size}&order=${OrderBy.ASCENDING}`
  // const options = {
  //   method: 'GET',
  //   next: { revalidate: 0 }
  // }

  // try {
  //   const res = await fetch(URL, options)
  //   if (!res.ok) {
  //     const errorResponse = await res.json().catch(() => ({}))
  //     return NextResponse.json(errorResponse, { status: res.status })
  //   }
  //   const paginatedResponse: Page<PurchaseOrderResponse> = await res.json()
  //   return NextResponse.json(paginatedResponse, { status: 200 })
  // } catch (error) {
  //   console.error('Error fetching data:', error)
  //   return NextResponse.json({ message: 'Failed to fetch products', error: error }, { status: 500 })
  // }

  try {
    const searchParams = req.nextUrl.searchParams
    const orderNumber = searchParams.get('orderNumber') ?? '10'
    const page = searchParams.get('page') ?? '1'
    const size = searchParams.get('size') ?? '10'

    if (orderNumber) {
      if (typeof orderNumber !== 'string') {
        return res.status(400).json({ error: 'Invalid order number' })
      }

      const purchaseOrder = await prisma.purchaseOrder.findUnique({
        where: { orderNumber },
        include: { WarehouseReceipt: true }
      })

      if (!purchaseOrder) {
        return res.status(404).json({ error: 'Purchase order not found' })
      }

      return res.status(200).json(purchaseOrder)
    } else {
      const purchaseOrders = await prisma.purchaseOrder.findMany({
        skip: (parseInt(page) - 1) * parseInt(size),
        take: parseInt(size)
      })

      return res.status(200).json(purchaseOrders)
    }
  } catch (error) {
    console.error('Error fetching purchase orders:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
