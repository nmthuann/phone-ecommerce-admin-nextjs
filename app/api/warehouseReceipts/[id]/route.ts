import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET({ params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return new NextResponse('id is required', { status: 400 })
    }

    const URL: string = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/warehouseReceipts`
    const warehouseReceipt = await axios.get(`${URL}/${parseInt(params.id)}`)

    return NextResponse.json(warehouseReceipt.data)
  } catch (error) {
    console.log('[WAREHOUSE_RECEIPT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
