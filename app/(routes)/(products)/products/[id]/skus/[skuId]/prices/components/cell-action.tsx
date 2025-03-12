'use client'

import { PriceColumn } from './columns'
import { ChartArea } from 'lucide-react'
import PriceReportModal from './price-report-modal'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface CellActionProps {
  data: PriceColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log('price data:::', data)
  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className='bg-white text-black dark:bg-slate-950 dark:text-white hover:text-white hover:bg-slate-500'
      >
        <ChartArea className='h-4 w-4' />
      </Button>
      <PriceReportModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={[]} />
    </div>
  )
}
