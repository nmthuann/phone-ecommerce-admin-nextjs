import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import defaultAvatar from '../../../../public/avatars/default-avtar.jpg'
import { RecentSale } from '@/actions/get-recent-sales'
import { FC } from 'react'
import Currency from '@/components/utilities/currency'

interface RecentSalesProps {
  recentSales: RecentSale[]
}
export const RecentSales: FC<RecentSalesProps> = ({ recentSales }) => {
  return (
    <div className='space-y-8'>
      {recentSales.map(sale => (
        <div key={sale.email} className='flex items-center'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src={defaultAvatar.src} alt='Avatar' />
            <AvatarFallback>{'NO'}</AvatarFallback>
          </Avatar>
          <div className='min-w-0'>
            <p className='text-sm font-medium leading-none truncate'>{sale.name}</p>
            <p className='text-sm text-muted-foreground truncate'>{sale.email}</p>
          </div>
          <div className='ml-auto font-medium flex'>
            +<Currency className='text-base' value={sale.amount.toFixed(2)} />
          </div>
        </div>
      ))}
    </div>
  )
}
