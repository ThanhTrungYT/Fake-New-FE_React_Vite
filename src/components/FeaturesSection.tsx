import { ShieldCheck, Percent, Languages, Zap, Eye, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: ShieldCheck, title: "Phát hiện tin giả / tin thật", desc: "Phân loại chính xác nội dung bằng AI" },
  { icon: Percent, title: "Hiển thị % độ tin cậy", desc: "Kết quả rõ ràng với chỉ số cụ thể" },
  { icon: Languages, title: "Phân tích tiếng Việt", desc: "Tối ưu cho ngữ pháp và ngữ cảnh Việt Nam" },
  { icon: Zap, title: "Tốc độ xử lý nhanh", desc: "Kết quả trả về trong vài giây" },
  { icon: Eye, title: "Giải thích kết quả", desc: "Minh bạch lý do đằng sau mỗi phân tích" },
  { icon: Sparkles, title: "Giao diện trực quan", desc: "Dễ sử dụng cho mọi đối tượng" },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 section-padding">
    <div className="section-container">
      <ScrollReveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Những gì bạn nhận được
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="glass-card-hover p-6 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
