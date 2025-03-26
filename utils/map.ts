import { Attribute } from '@/types/products.type'

export const mapAttributes = (skuAttributes: Record<string, unknown>): Attribute[] => {
  return Object.entries(skuAttributes).map(([key, value]) => ({
    key,
    value
  }))
}
