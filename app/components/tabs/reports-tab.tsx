'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const reports = [
  {
    title: 'Báo cáo đơn hàng theo ngày',
    description: 'Xem danh sách đơn hàng đã tạo theo ngày, trạng thái, phương thức thanh toán và tổng giá trị.',
    href: '/orders'
  },
  {
    title: 'Báo cáo doanh thu theo sản phẩm',
    description: 'Phân tích doanh thu theo từng sản phẩm dựa trên số lượng bán ra và giá bán thực tế.',
    href: '/reports/sales-by-product'
  },
  {
    title: 'Báo cáo nhập hàng theo nhà cung cấp',
    description: 'Theo dõi tổng giá trị hàng nhập từ mỗi nhà cung cấp theo thời gian để đánh giá hiệu quả hợp tác.',
    href: '/purchaseOrders'
  }
]
const ReportsTab = () => {
  return (
    <div className='flex items-center justify-center px-4'>
      <Accordion type='single' collapsible className='w-full max-w-xl'>
        {reports.map((report, index) => (
          <AccordionItem key={report.title} value={`report-${index + 1}`}>
            <AccordionTrigger>{report.title}</AccordionTrigger>
            <AccordionContent>
              {report.description}
              <div className='mt-2'>
                <Link href={report.href}>
                  <Button size='sm'>Xem ngay</Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default ReportsTab
