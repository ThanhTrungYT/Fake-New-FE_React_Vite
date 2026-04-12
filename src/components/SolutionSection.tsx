import { Search, Globe, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Search,
    title: "Phân tích nội dung",
    desc: "Phát hiện dấu hiệu bất thường trong văn bản bằng NLP tiếng Việt",
  },
  {
    icon: Globe,
    title: "Đánh giá nguồn tin",
    desc: "Kiểm tra độ uy tín của nguồn đăng tải thông tin",
  },
  {
    icon: BarChart3,
    title: "Đối chứng thông tin",
    desc: "So sánh với các nguồn tin đáng tin cậy đã được xác minh",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 lg:py-28 section-padding bg-muted/50">
    <div className="section-container">
      <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4" style={{ textWrap: "balance" }}>
          Giải pháp AI giúp bạn kiểm chứng thông tin
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Hệ thống sử dụng trí tuệ nhân tạo để phân tích và đánh giá độ tin cậy của tin tức
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card-hover p-7 h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
