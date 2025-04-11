import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    if (!id) {
      return new NextResponse('id is required', { status: 400 })
    }

    const URL: string = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/productSerials`
    const purchaseOrder = await axios.get(`${URL}/${parseInt(id)}`)

    return NextResponse.json(purchaseOrder.data)
  } catch (error) {
    console.log('[PRODUCT_SERIAL_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
