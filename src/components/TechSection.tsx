import ScrollReveal from "./ScrollReveal";

const techs = ["Machine Learning", "Logistic Regression", "SVM", "Random Forest", "XGBoost", "PhoBERT"];

const TechSection = () => (
  <section id="tech" className="py-20 lg:py-28 section-padding">
    <div className="section-container text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Công nghệ phía sau
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Kết hợp nhiều mô hình học máy để đạt độ chính xác cao nhất
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TechSection;
