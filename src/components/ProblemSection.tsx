import { MessageSquareWarning, Users, ShieldAlert } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Tràn lan mạng xã hội",
    desc: "Thông tin sai lệch xuất hiện tràn lan trên Facebook, TikTok, Zalo mỗi ngày",
  },
  {
    icon: Users,
    title: "Khó phân biệt thật – giả",
    desc: "Người dùng ngày càng khó nhận biết đâu là thông tin chính xác",
  },
  {
    icon: ShieldAlert,
    title: "Ảnh hưởng nghiêm trọng",
    desc: "Tin giả gây hoang mang, lừa đảo và ảnh hưởng tiêu cực đến xã hội",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-20 lg:py-28 section-padding">
    <div className="section-container">
      <ScrollReveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4" style={{ textWrap: "balance" }}>
          Tin giả đang lan truyền nhanh hơn bao giờ hết
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass-card-hover p-7 text-center h-full">
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-6 h-6 text-destructive" />
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

export default ProblemSection;
