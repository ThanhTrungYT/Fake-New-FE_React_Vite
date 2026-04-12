import { User, Newspaper, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cases = [
  { icon: User, title: "Cá nhân", desc: "Tránh bị lừa đảo, đọc tin an toàn hơn mỗi ngày" },
  { icon: Newspaper, title: "Báo chí", desc: "Kiểm chứng nhanh thông tin trước khi xuất bản" },
  { icon: Building2, title: "Cơ quan quản lý", desc: "Giám sát và phát hiện tin giả trên diện rộng" },
];

const UseCasesSection = () => (
  <section className="py-20 lg:py-28 section-padding bg-muted/50">
    <div className="section-container">
      <ScrollReveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Ai có thể sử dụng?
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {cases.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card-hover p-7 text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
