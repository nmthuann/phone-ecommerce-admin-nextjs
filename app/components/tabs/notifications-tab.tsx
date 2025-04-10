'use client'

import { cn } from '@/lib/utils'
import { AlertTriangle, Bell, CheckCircle, Package } from 'lucide-react'

const notifications = [
  {
    id: 1,
    title: 'Đơn hàng #12345 đã được xác nhận',
    description: 'Chúng tôi đang chuẩn bị đơn hàng của bạn.',
    icon: <Package className='w-5 h-5 text-blue-500' />,
    time: '5 phút trước',
    read: false
  },
  {
    id: 2,
    title: 'Thanh toán thành công',
    description: 'Bạn đã thanh toán 550.000đ qua MoMo.',
    icon: <CheckCircle className='w-5 h-5 text-green-500' />,
    time: '30 phút trước',
    read: true
  },
  {
    id: 3,
    title: 'Thiếu hàng trong đơn #12340',
    description: 'Một số sản phẩm trong đơn của bạn đang tạm hết hàng.',
    icon: <AlertTriangle className='w-5 h-5 text-yellow-500' />,
    time: '1 giờ trước',
    read: false
  }
]
const NotificationsTab = () => {
  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
        <Bell className='w-5 h-5' />
        {`Notifications (${notifications.length})`}
      </h2>
      <div className='space-y-4'>
        {notifications.map(n => (
          <div
            key={n.id}
            className={cn(
              'flex items-start gap-3 p-4 rounded-lg border shadow-sm transition',
              n.read ? 'bg-white' : 'bg-gray-50 border-blue-100'
            )}
          >
            <div className='mt-1.5'>{n.icon}</div>
            <div className='flex-1'>
              <p className='font-medium'>{n.title}</p>
              <p className='text-sm text-muted-foreground'>{n.description}</p>
              <span className='text-xs text-gray-400'>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsTab
