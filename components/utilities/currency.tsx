'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND'
})

interface CurrencyProps {
  value?: string | number
  className?: string
  isShorten?: boolean
}

const Currency: React.FC<CurrencyProps> = ({ value = 0, className = '', isShorten = false }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const formatCurrency = (num: number) => {
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(6)} tỷ đ` // Giữ 2 số thập phân
    }
    if (num >= 1e6) {
      return `${(num / 1e6).toFixed(3)} triệu đ` // Giữ 2 số thập phân
    }
    return formatter.format(num)
  }

  return isShorten ? (
    <div className={`font-semibold text-2xl ${className}`}>{formatCurrency(Number(value))}</div>
  ) : (
    <div className={`font-semibold text-2xl ${className}`}>{formatter.format(Number(value))}</div>
  )
}

export default Currency
