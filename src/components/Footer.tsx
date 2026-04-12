import { Shield, Github, Mail, Phone, School } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-10">
    <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* LEFT */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Shield className="w-5 h-5" />
          FakeNews Detection
    
        </div>

        <p className="text-sm text-blue-100">
          Hệ thống phát hiện tin giả tiếng Việt ứng dụng trí tuệ nhân tạo.
        </p>

        {/* Trường */}
        <div className="flex items-start gap-2 text-sm text-blue-100">
          <School className="w-4 h-4 mt-1" />
          <div>
            <p className="font-medium text-white text-sm">
              Trường Đại học Kinh tế - Đại học Đà Nẵng
            </p>
            <p className="text-sm">Khoa Thống kê - Tin học</p>
          </div>
        </div>

        <p className="text-xs text-blue-200 pt-2">
          © 2026 FakeNews

        </p>
      </div>

      {/* RIGHT */}
      <div className="space-y-4">
        
        {/* Nhóm */}
        <div>
          <p className="font-semibold text-base mb-1">Nhóm thực hiện</p>
          <ul className="text-sm text-blue-100 space-y-1">
            <li>Nguyễn Thành Trung</li>
            <li>Nguyễn Hoàng Việt</li>
            <li>Nguyễn Trần Thế Quỳnh</li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <p className="font-semibold text-base mb-1">Liên hệ</p>
          <div className="text-sm text-blue-100 space-y-1">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="https://zalo.me/0327011501" target="_blank">
                Zalo: 0327011501
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:nguyentrungyt284@gmail.com">
                nguyentrungyt284@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Icon */}
        <div className="flex items-center gap-4 pt-2">
          <a href="mailto:nguyentrungyt284@gmail.com">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#">
            <Github className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;