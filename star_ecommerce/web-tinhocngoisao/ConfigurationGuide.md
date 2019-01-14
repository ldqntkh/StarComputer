
#-------------Cấu hình static page-----------------
# 1. Checkout (xem image: http://prntscr.com/lfamjl)
# 2. Xây dựng cấu hình PC
#       - Tạo 1 page build pc với SLUG là build-pc (http://prntscr.com/lfamxl)
#       - Tạo 1 page share build pc với SLUG là share-buildpc ()
# 3. Xây dựng menu trên mobile (http://prntscr.com/lfankj)
#   3.1 Trang chủ (default)
#   3.2 Danh sách ngành hàng
#       - Tạo 1 page với SLUG là danh-sach-mat-hang (http://prntscr.com/lfappm)
#   3.3 Quản lý tài khoản (link trực tiếp đến trang my account)
#   3.4 Xây dựng cấu hình (Link trực tiếp đến trang build pc)
#   3.5 Sản phẩm đã xem (chưa làm)
#       - Tạo 1 page với Slug là san-pham-da-xem
#   3.6 Tư vấn mua hàng (liên kết với chat page)
#   3.7 Hot line (click vao sẽ gọi đến số hot line)
#   3.8 Hệ thống show room
#       - tạo 1 page với Slug là he-thong-show-room (http://prntscr.com/lfdktz)
#   3.9 Chức năng gửi mail nhắc khách hàng
#       . Trong mục Settings
#           + Để thiết lập thời gian mà khách hàng quên thanh toán thì điền vào Cart abandoned cut-off time (đơn vị là phút)
#           + Không lưu lại giỏ hàng mà khách hàng quên thanh toán khi chưa đăng nhập thì không chọn Start tracking from Cart Page
#           + Thiết lập tự động xóa giỏ hàng chưa thanh toán sau khoản thời gian thì điền vào Automatically Delete Abandoned Orders after X days (đơn vị là ngày)
#           + Muốn gửi email cho admin khi mà giỏ hàng đã thanh toán thì check vào ô Email admin On Order Recovery
#       . Trong mục Email Templates
#           + Có thể chọn 3 khoảng thời gian theo giờ, phút giây ở "Send this email". Tối đa là (3 giờ hoặc 3 phút hoặc 3 ngày)
#           + Nội dung {{products.cart}} lúc nào cũng cần phải có vì dùng để hiển thị giỏ hàng
#       . Trong mục Abandoned Orders
#           + Dùng để theo dõi những giỏ hàng nào mà chưa thanh toán, ta có thể xem được chi tiết đơn hàng và tổng tiền của đơn hàng đó