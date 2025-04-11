export function generateOrderEmailHtml(order: {
  customerName: string
  orderId: number
  address: string
  phone: string
  note: string
  items: {
    name: string
    image: string
    quantity: number
    price: number
  }[]
  total: number
}) {
  return `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
    <h2 style="color: #e53935;">Cảm ơn ${order.customerName} đã đặt hàng tại My Phone!</h2>
    <p>Đơn hàng của bạn đã được tạo thành công. Mã đơn hàng: <strong>${order.orderId}</strong></p>

    <h3>Thông tin khách hàng:</h3>
    <p><strong>Họ tên:</strong> ${order.customerName}</p>
    <p><strong>Số điện thoại:</strong> ${order.phone}</p>
    <p><strong>Địa chỉ giao hàng:</strong> ${order.address}</p>
    ${order.note ? `<p><strong>Ghi chú:</strong> ${order.note}</p>` : ''}

    <h3 style="margin-top: 20px;">Chi tiết đơn hàng:</h3>
    <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f5f5f5;">
          <th align="left">Sản phẩm</th>
          <th align="center">Số lượng</th>
          <th align="right">Giá</th>
        </tr>
      </thead>
      <tbody>
        ${order.items
          .map(
            item => `
            <tr style="border-bottom: 1px solid #eee;">
              <td>
                <div style="display: flex; align-items: center;">
                  <img src="${item.image}" alt="${
              item.name
            }" width="50" style="margin-right: 10px; border-radius: 4px;" />
                  <span>${item.name}</span>
                </div>
              </td>
              <td align="center">${item.quantity}</td>
              <td align="right">${item.price.toLocaleString()}₫</td>
            </tr>`
          )
          .join('')}
      </tbody>
    </table>

    <h3 style="text-align: right; margin-top: 20px;">Tổng cộng: ${order.total.toLocaleString()}₫</h3>

    <p style="margin-top: 30px;">Chúng tôi sẽ sớm giao hàng đến bạn. Mọi thắc mắc vui lòng liên hệ <a href="mailto:nmt.m10.2862001@gmail.com">nmt.m10.2862001@gmail.com</a>.</p>

    <p style="color: #888; font-size: 12px;">My Phone - Luôn đồng hành cùng bạn.</p>
  </div>
  `
}
