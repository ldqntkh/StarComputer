
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
#       . Trong mục Settings (http://prntscr.com/m7icgj)
#       . Trong mục Email Templates
#           + Cấu hình thời gian gửi email: http://prntscr.com/m7igvf
#           + Nội dung {{products.cart}} lúc nào cũng cần phải có vì dùng để hiển thị giỏ hàng
#       . Trong mục Abandoned Orders
#           + Dùng để theo dõi những giỏ hàng nào mà chưa thanh toán, ta có thể xem được chi tiết đơn hàng và tổng tiền của đơn hàng đó
# 4. Chỗ banner trên trang chủ (http://prntscr.com/mqe0ad)
#   4.1 Cột dưới cùng (http://prntscr.com/mqdy3w)
#      - Thêm widget Ảnh vào title Under Feature Section (http://prntscr.com/mqe01p)
#   4.2 Cột bên tay phải (http://prntscr.com/mqe1eg)
#      - Thêm widget Ảnh vào title Right Feature (http://prntscr.com/mqe1po)
#   4.3 Cột bên tay trái (http://prntscr.com/mqy29j)
#      - Thêm widget Ảnh vào title Left Feature (http://prntscr.com/mqy2mm)





############################### Cấu hình source ###############################
# Build css cho wp-content: dùng koala build file style.scss (online_shop_child) thành file custom-style.css (online_shop_child)
# BuildPC
#   Sử dụng build js webpack cho cả server và client
#   Build scss cho server, dùng koala