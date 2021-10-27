/*
* - Sử dụng Terminal Powershell and Command Prompt
* - Control Panel DirectAdmin
* - WebServer: NGINX
*/

/* Kết nối với Sever thông qua Powershell bằng dòng lệnh */
ssh user@IPaddres -p Port
Ví dụ: ssh root@103.68.251.128 -p 7777
-- Nhập mật khẩu, sau khi đăng nhập thành công -> [root@sv1128 ~]#


/* Kết nối với Mysql qua câu lệnh sau */
mysql -u username -p
Ví dụ: mysql -u root -p
-- Nhập mật khẩu, sau khi đăng nhập thành công mysql>

/* Các câu truy cấn SQL bắt buộc phải có dấu ; ở cuối cụng */
/* Hiển thị toàn bộ database của User đó */
show databases;

/* Chọn 1 database trong danh sách */
use databasename;
Ví dụ: use vlcomvn_vieclamdnvn;
-- Thông báo: Database changed

/* Thực hiện các câu truy vấn thông thường */
ví dụ: select * from `wp_users`;