import { ClipboardPaste, Cpu, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: ClipboardPaste, num: "1", title: "Nhập nội dung", desc: "Dán link bài viết hoặc nội dung cần kiểm tra" },
  { icon: Cpu, num: "2", title: "Học máy phân tích", desc: "Hệ thống AI xử lý dữ liệu bằng nhiều mô hình" },
  { icon: CheckCircle, num: "3", title: "Nhận kết quả", desc: "Trả kết quả kèm mức độ tin cậy và giải thích" },
];

const HowItWorksSection = () => (
  <section id="how" className="py-20 lg:py-28 section-padding bg-muted/50">
    <div className="section-container">
      <ScrollReveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Hoạt động như thế nào?
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.12} className="text-center">
            <div className="step-number mx-auto mb-5">{s.num}</div>
            <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
