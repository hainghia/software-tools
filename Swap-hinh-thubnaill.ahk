#NoEnv  ; Dùng để autohotkey có thể tương thích cho các bản update trong tương lai
; #Warn  ; Giúp hệ thống phát hiện ra csc lỗi
SendMode Input  ; Được đề xuất cho các tập lệnh mới do tốc độ và độ tin cậy vượt trội của nó.
SetWorkingDir %A_ScriptDir%  ; Thư mục làm việc mặc định của script
#SingleInstance, Force ;Chỉ chạy đoạn sciprt này 1 lần duy nhất
SetTitleMatchMode, regex ;Find window title by regex
; Ctrl → ^, Shift → + Alt → !, RWin → #
;==================PHẦN HEDER=====================

; Nội dung: Lưu hình đại diện của bài post từ website cũ sang website mới
F9::
    Loop, 200
    {
        ; Tab HaiTran.Jobkey.VN
        ; Mở trang cần lấy hình đại điện trên firefox ở nửa màn hình bên phải
        Sleep, 1000
        Click, L, 223, 61 ; Click vào mục thanh địa chỉ web mẫu
        Send, {F6}
        Sleep, 200
        Send, https://haitran.jobkey.vn/wp-admin/edit.php
        Sleep, 200
        Send, {Enter}
        Sleep, 5000
        Click, L, 129, 350 ;Click vào mục chỉnh sửa bài viết
        Sleep, 5000
        Click, R, 1666, 593 ;Click vào mục Hình đại diện
        Sleep, 1000
        Send, V
        Sleep, 1000
        Send, {Enter}
        Sleep, 4000
        Click, L, 1663, 472 ; Xóa Post
        ; Kết Thúc lưu hình ảnh

        Sleep, 5000
        SetKeyDelay 30,50
        Send, {ALT DOWN}{TAB}{ALT UP}
        ; Tab HaiTran139.Jobkey.VN
        Sleep, 1000
        Click, L, 92, 21 ; Click vào mục thanh địa chỉ
        Send, {F6}
        Sleep, 200
        Send, https://haitran139.jobkey.vn/wp-admin/edit.php?tag=s
        Sleep, 200
        Send, {Enter}
        Sleep, 4000
        Click, L, 122, 351 ;Click vào mục chỉnh sửa bài viết
        
        Sleep, 2000
        Click, L, 1623, 851 ; Xóa tag
        
        Sleep, 4000
        Click, L, 1651, 663 ; Click vào mục chỉnh sửa ảnh đại diện
        Sleep, 4000
        Click, L, 64, 206 ; Click vào mục Tải File
        Sleep, 4000
        Click, L, 951, 553 ; Click vào mục Chọn Tập Tin
        Sleep, 4000
        Click, L, 323, 181 ; Click vào mục chọn hình ảnh trong folder
        Sleep, 500
        Send, {Enter}
        Sleep, 4000
        Click, L, 1788, 987 ; Click vào mục chọn hình ảnh trên website
        Sleep, 4000
        Click, L, 1829, 435 ; Click vào mục cập nhật
        ; Kết thúc up hình
        Sleep, 5000
        SetKeyDelay 30,50
        Send, {ALT DOWN}{TAB}{ALT UP}
    }