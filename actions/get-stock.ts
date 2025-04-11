import prisma from '@/lib/prisma'

export const getStock = async (skuId: number) => {
  const stock = await prisma.productSerial.count({
    where: {
      productSkuId: skuId
    }
  })
  return stock
}
