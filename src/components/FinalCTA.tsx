import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => {
  const handleScroll = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center", // 🔥 luôn vào giữa màn hình
      });

      const input = el.querySelector("input") as HTMLInputElement;
      input?.focus();
    }
  };

  return (
    <section id="cta" className="py-20 lg:py-28 section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="gradient-bg rounded-3xl p-10 sm:p-16 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4"
              style={{ textWrap: "balance" }}
            >
              Đừng để tin giả đánh lừa bạn
            </h2>

            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto leading-relaxed">
              Bắt đầu kiểm chứng thông tin ngay hôm nay
            </p>

            <button
              onClick={handleScroll}
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-xl font-semibold transition-transform duration-200 active:scale-[0.97] shadow-lg"
            >
              Dùng thử miễn phí
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;